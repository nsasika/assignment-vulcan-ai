module.exports = function () {
  let operations = {
    GET,
    POST,
    PUT,
    DELETE,
  };

  function GET(req, res, next) {
    res.status(200).json([
      { id: 0, message: "First todo" },
      { id: 1, message: "Second todo" },
    ]);
  }

  function POST(req, res, next) {
    console.log(`About to create todo: ${JSON.stringify(req.body)}`);
    res.status(201).send();
  }

  function PUT(req, res, next) {
    console.log(`About to update todo id: ${req.query.id}`);
    res.status(200).send();
  }

  function DELETE(req, res, next) {
    console.log(`About to delete todo id: ${req.query.id}`);
    res.status(200).send();
  }


  POST.apiDoc = {
    summary: "Register User",
    operationId: "user-register",
    consumes: ["application/json"],
    parameters: [
      {
        in: "body",
        name: "Request body",
        schema: {
          $ref: "#/definitions/RegisterUser",
        },
      },
    ],
    responses: {
      200: {
        description: "Success",
      },
    },
  };

  return operations;
};
