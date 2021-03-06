"use strict";
const createModels = require("./createModels");
const getDateObject = require("./getDateObject");

async function queryUpdates() {
  try {
    console.log("in queryUpdates");
    const models = createModels();
    // console.log({ models });
    // console.log;

    const response = {};
    for (const name in models) {
      const model = models[name];
      console.log(`running query for ${name}`);
      const find = getDateObject("updated_at", 1, "$gt");
      console.log({ p: find["$and"][1] });
      response[name] = await model.countDocuments(find);
      // await model.deleteMany(identifyOld());
      // console.log({ response });
    }
    console.log({ response });
    return response;
  } catch (e) {
    console.log({ e });
  }
}

module.exports = { queryUpdates };
