let args = process.argv;

for (let i = 0; i < args.length; i++) {
    if (!(i == 0 || i == 1)) {
        console.log(args[i]);
    }
}

// This is basically like command line input