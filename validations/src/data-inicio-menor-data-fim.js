
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('node:fs');
try{
    await  run();
}catch(e){
    core.setFailed(e)
}


async function run() {

    console.log(github.context.payload.repository);
    await example("info-apis.json");
    await example("/account/info.json");
    await example("./account/info.json")
}
async function example(filePath) {
  try {
    console.log(filePath);

    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
