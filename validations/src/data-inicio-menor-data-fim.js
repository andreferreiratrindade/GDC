
const github = require('@actions/github');
const core = require('@actions/core');

try{
    run();
}catch(e){
    core.setFailed(e)
}


function run() {
    console.log(github);
    console.log(...github);
}
