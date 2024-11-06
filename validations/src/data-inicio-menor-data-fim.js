
import { readFileSync } from 'fs';

try{
      run();
}catch(e){
   // core.setFailed(e)
}


 function run() {


     example("info-apis.json");
     example("/account/info.json");
     example("./account/info.json");
     example("../account/info.json");
}
 function example(filePath) {
  try {
    console.log(filePath);

    const data = readFileSync(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
