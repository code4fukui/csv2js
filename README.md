# csv2js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Deno script to convert CSV files into JavaScript ES modules.

This command-line tool reads a CSV file, parses its content, and generates a new `.js` file that exports the data as an array of objects using an ES `export default` statement.

## Features

- Converts CSV data into a JavaScript array of objects.
- Uses the CSV header row for object keys.
- Generates a standard ES module (`.js`) file.
- Executable directly from a URL using the Deno runtime.

## Requirements

- [Deno](https://deno.land/)

## Usage

### 1. Run the Converter

Execute the script via its URL, passing your local CSV file as an argument. The `-A` flag grants the script necessary permissions to read your input file and write the output file.

```sh
deno run -A https://github.com/code4fukui/csv2js your-data.csv
```

This command will create a new file named `your-data.csv.js` in the same directory.

### 2. Import the Generated Module

You can now import the array directly into your JavaScript or TypeScript projects.

```js
import myData from "./your-data.csv.js";

console.log(myData);
```

## Example

Given the following input file `test.csv`:

```csv
name,value
A,123
b,555
```

Run this command:

```sh
deno run -A https://github.com/code4fukui/csv2js test.csv
```

It will generate the following file, `test.csv.js`:

```js
export default [
  {
    "name": "A",
    "value": "123"
  },
  {
    "name": "b",
    "value": "555"
  }
];
```

You can then use it in your code:

```js
import data from "./test.csv.js";

console.log(data[0].name); // "A"
console.log(data[1].value); // "555"
```

## License

MIT License.