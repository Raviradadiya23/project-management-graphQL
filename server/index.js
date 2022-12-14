require("dotenv").config();

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const cors = require("cors");

const connectDB = require("./config/db");

const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

//connection to the Database
connectDB();
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`listing on the port ${port}`));
