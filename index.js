const express = require("express");
var { graphqlHTTP } = require("express-graphql");

const schema = require("./Schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3001, () => console.log("Server start on port 3001"));
