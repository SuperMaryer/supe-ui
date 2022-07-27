const glob = require("glob"); // 动态读文件夹来遍历
const path = require("path"); // 路径
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 清理文件夹
const { VueLoaderPlugin } = require("vue-loader");

const list = {};
// list 期望值为：
// const list = {
//     card: './component/lig/card/index.js',
//     demo: './component/lig/demo/index.js',
// }

async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (const file of files) {
    const output = file.split(/[/.]/)[2];
    list[output] = `./${file}`;
  }
}

makeList("components/lib", list);

module.exports = {
  mode: "development",
  entry: list,
  output: {
    filename: "[name].umd.js",
    path: path.resolve(__dirname, "dist"),// 不能写死
    library: "myLib",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin(), new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
    ],
  },
};
