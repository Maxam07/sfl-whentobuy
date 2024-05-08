import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/.netlify/functions/api", (req, res) => 
    res.send("Hello World!")
);

const handler = serverless(app)

module.exports.handler = async(event, context) => {
    const result = await handler(event, context);
    return result;
}