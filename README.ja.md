# csv2js

CSVファイルをJavaScript ESモジュールに変換するシンプルなDenoスクリプトです。

このコマンドラインツールはCSVファイルを読み込んで内容を解析し、ESの `export default` 構文を使用してデータをオブジェクトの配列としてエクスポートする新しい `.js` ファイルを生成します。

## 特徴

- CSVデータをJavaScriptオブジェクトの配列に変換します。
- CSVのヘッダ行をオブジェクトのキーとして使用します。
- 標準のESモジュール（`.js` ファイル）を生成します。
- Denoランタイムを使用してURLから直接実行可能です。

## 要件

- [Deno](https://deno.land/)

## 使い方

### 1. 変換スクリプトの実行

URL経由でスクリプトを実行し、ローカルのCSVファイルを引数として渡します。`-A` フラグは、入力ファイルの読み取りと出力ファイルの書き込みに必要な権限をスクリプトに付与します。

```sh
deno run -A https://code4fukui.github.io/csv2js/csv2.js your-data.csv
```

このコマンドは、同じディレクトリに `your-data.csv.js` という新しいファイルを作成します。

### 2. 生成されたモジュールのインポート

これで、JavaScriptやTypeScriptのプロジェクトに配列を直接インポートできるようになります。

```js
import myData from "./your-data.csv.js";

console.log(myData);
```

## 例

以下の入力ファイル `test.csv` があるとします。

```csv
name,value
A,123
b,555
```

次のコマンドを実行します。

```sh
deno run -A https://code4fukui.github.io/csv2js/csv2.js test.csv
```

これにより、以下のファイル `test.csv.js` が生成されます。

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

その後、コード内で以下のように使用できます。

```js
import data from "./test.csv.js";

console.log(data[0].name); // "A"
console.log(data[1].value); // "555"
```

## ライセンス

MIT License.
