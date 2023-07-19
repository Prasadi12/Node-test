// const os = require('os');
// const path = require('path');

// import os from 'os';
import {dirname,join} from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

readFile(join(__dirname,'myName.txt'),"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(data.toString());
        console.log(data);
    }
});

// console.log(os.platform());
// console.log(os.version());
// console.log(__dirname);
// console.log(__filename);

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename));

