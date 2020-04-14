"use strict";
const path = require("path");

module.exports = {
  // 시작점
  entry: {
    main: ["./src/main.js"],
  },

  // 빌드점
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },

  // 규칙
  module: {
    rules: [
      {
        test: /\.js$/, // 문자열에 규칙 정해주는 것
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
    ],
  },

  // 추가 기능
  plugins: [],

  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 3030,
  },
};
