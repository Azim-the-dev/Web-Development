import ollama from 'ollama';
import { appendFile, writeFileSync } from 'fs';
import { createInterface } from 'readline';
let prompt = '';

// Taking input from user
let rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your prompt: ', async (msg) => {
    prompt = msg;

    // Making file empty
    try {
        writeFileSync('response.md', `<h1 align="center">OUTOUT</h1><br>`);
    } catch (err) {
        console.error(err);
    }

    // Geeting response from Ollama
    const response = await ollama.chat({
        model: 'llama3:8b',
        messages: [{ role: 'user', content: prompt }],
        stream: true,
    });

    // Writing in file
    console.log(`Loading...`);
    for await (const part of response) {
        appendFile('response.md', part.message.content, (err) => {
            if (err) throw err;
        });
    }

    console.log("DONE!");
    rl.close();
});

// (Answer in readable Markdown (.md) format.)