function logger(content, type = "log") {
    switch (type) {
        case "log": {
            var css = "background: #6495ED;";
            return console.log(`%c${type.toUpperCase()}`, `${css}`, `${content}`);
        }
    }
};


// case "warn": {
//     return console.log(`${chalk.black.bgYellow(type.toUpperCase())} ${content} `);
// }
// case "error": {
//     return console.log(`${chalk.bgRed(type.toUpperCase())} ${content} `);
// }
// case "debug": {
//     return console.log(`${chalk.green(type.toUpperCase())} ${content} `);
// }
// case "cmd": {
//     return console.log(`${chalk.black.bgWhite(type.toUpperCase())} ${content}`);
// }
// case "ready": {
//     return console.log(`${chalk.black.bgGreen(type.toUpperCase())} ${content}`);
// }
// default:
//     throw new TypeError("Logger type must be either warn, debug, log, ready, cmd or error.");