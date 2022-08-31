const express = require("express");
const app = express();
const Users = require("./models/users");
const Advertisements = require("./models/advertisements");
const Contents = require("./models/contents");
const checkAuth = require("./middleware/checkAuth");
const userRoutes = require("./routes/users.route");
const authRoutes = require("./routes/auth.route");
const passport = require("passport");
const strategy = require("./config/jwtOptions");
const bodyParser = require("body-parser");
const db = require("./config/database");
const { initialize } = require("express-openapi");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Error: ${err}`));

Users.sync({ alter: true })
  .then(() => console.log("User table created successfully"))
  .catch((err) => console.log(`Users table not created,  error ${err}`));

Advertisements.sync({ alter: true })
  .then(() => console.log("Advertisements table created successfully"))
  .catch((err) =>
    console.log(`Advertisements table not created,  error ${err}`)
  );

Contents.sync({ alter: true })
  .then(() => console.log("Contents table created successfully"))
  .catch((err) => console.log(`Contents table not created,  error ${err}`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use("strategy", strategy);

app.use("/auth", authRoutes);

app.use("/users", checkAuth, userRoutes);

// OpenAPI routes
initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

// OpenAPI UI
app.use(
  "/api-documentation",
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: `http://localhost:${port}/api-docs`,
    },
  })
);

console.log(
  `OpenAPI documentation available in http://localhost:${port}/api-documentation`
);

module.exports = app;
