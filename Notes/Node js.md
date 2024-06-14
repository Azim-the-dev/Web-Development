<h1 align="center">Node JS</h1>

![](https://miro.medium.com/v2/resize:fit:1400/1*dJw_f9aVwuHM-OCMe-UMBg.jpeg)

## Process
process: This object provides information about, and control over, the current Node.js process.

process.argv: returns an array containing the command-line arguments passed when the Node.js process was launched.

> This is basically like command line input

Example:
```js
let args = process.argv;

for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
}
```
Output:
```sh
PS C:\Users\azzim\Desktop/Node js> node process.js azim azim2  
C:\Program Files\nodejs\node.exe
C:\Users\azzim\Desktop/Node js\process.js
azim
azim2
```

## module-exports (require)

require() a built-in function to include external modules that exist in separate files.

module.exports a special object

Example:
* first module.exports
    ```js
    module.exports = obj;
    ```
* then require
  ```js
  let data = require("./print");
  ```

> in directory we have to make `index.js`

> for module-exports check >> Node js/Module Exports

## require V/S import

We can't selectively load only the pieces we need with require but with import, we can selectively load only

the pieces we need, which can save memory. Loading is synchronous for 'require' but can be asynchronous for 'import'.

Example:
* first export
    ```js
    export let obj = {
        print: (arg) => {
            return arg;
        }
    }
    ```
* then import
  ```js
  import { obj } from "./print.js";
  ```

> for import check >> Node js/Import