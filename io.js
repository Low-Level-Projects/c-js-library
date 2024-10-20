export default function printf (arg, ...args){
    let result = "";
    let argIndex = 0; // To keep track of args array for replacing %s

    for (let i = 0; i < arg.length; i++) {
        if (arg[i] == "%" && arg[i + 1] == "s") {
            result += args[argIndex] !== undefined ? args[argIndex] : "";
            argIndex++; // Move to the next argument in the args array
            i++; // Skip the next character ('s')
        } else {
            result += arg[i]; // Add the current character to result
        }
    }

    process.stdout.write(arg);
}


