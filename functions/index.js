const functions = require('firebase-functions');
const glob = require('glob');

const files = glob.sync('./*/*.*.js', { cwd: __dirname, ignore: './node_modules/**'});
files.forEach(filePath => {
    const filePathSplit = filePath.split('/');
    const functionTrigger = filePathSplit[1];
    const [ functionName, triggerType ] = filePathSplit[filePathSplit.length - 1].split('.');
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
        exports[functionName] = functions[functionTrigger][triggerType](require(filePath));
    }
});