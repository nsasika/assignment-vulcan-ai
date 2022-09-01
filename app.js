const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { initialize } = require("express-openapi");
const swaggerUi = require("swagger-ui-express");

const { excuteDb } = require("./helpers/database");

const passport = require("passport");
const strategy = require("./config/jwtOptions");
const checkAuth = require("./middleware/checkAuth");

const userRoutes = require("./routes/users.route");
const authRoutes = require("./routes/auth.route");
const advertisementRoutes = require("./routes/advertisements.route");

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

excuteDb();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use("strategy", strategy);

app.use("/auth", authRoutes);

app.use("/users", checkAuth, userRoutes);

app.use("/advertisements", checkAuth, advertisementRoutes);

initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});

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
