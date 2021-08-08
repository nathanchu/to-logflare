#!/usr/bin/env node
const toLogflare = require("./index");
const readline = require("readline");
const arg = require("arg");

const args = arg({
  "--source": String,
  "--api-key": String,
  "-s": "--source",
  "-a": "--api-key",
});

const source = args["--source"];
const apiKey = args["--api-key"];

if (!source || !apiKey) {
  console.log("Missing required arguments");
  process.exit(1);
}

const noop = () => {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (message) => {
  console.log(message);
  toLogflare({ message, source, apiKey })
    .then(noop)
    .catch((err) => {
      console.error(err);
    });
});
