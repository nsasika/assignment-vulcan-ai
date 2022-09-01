const apiDoc = {
  swagger: "2.0",
  basePath: "/",
  info: {
    title: "Vulcan AI assigment app API",
    version: "1.0.0",
  },
  definitions: {
    UserLogin: {
      type: "object",
      properties: {
        username: {
          type: "string",
        },
        password: {
          type: "string",
        },
      },
      required: ["id", "message"],
    },
    RegisterUser: {
      type: "object",
      properties: {
        username: {
          type: "string",
        },
        password: {
          type: "string",
        },
        email: {
          type: "string",
        },
        address: {
          type: "string",
        },
      },
      required: ["username", "password", "email", "address"],
    },
    CreateAdvertisement: {
      type: "object",
      properties: {
        email: {
          type: "string",
        },
        title: {
          type: "string",
        },
        description: {
          type: "string",
        },
        contents: {
          type: "array",
        },
      },
      required: ["email", "title", "description", "contents"],
    },
  },
  paths: {},
};

module.exports = apiDoc;
