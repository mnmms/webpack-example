// 설정 파일

// const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
     entry: "./script.js", //웹팩은 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일이 어디에 있는지 알아야 함, 설정 파일에서 이를 Entry 속성으로 명시, 설정파일에서 entry 설정하지 않은 경우 src/index
     output: { //웹팩이 번들링 결과를 dist/main.js 파일로 묶어내는 이유: 설정이 dist/main.js로 했기 때문, output 속성으로 변경 가능
          path: __dirname, //현재 프로젝트의 디렉토리를 의미
          filename: "build.js",
     },
     module: {
          rules: [ //처리 규칙 등록
               {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"] //test 항목에 정의된 정규식에 매칭되는 파일은 use 항목에 등록된 로더를 통해서 처리, 여기서는 css 파일 처리를 위해 style-loader, css-loader 사용
               }
          ]
     },
     // plugins: [new CleanWebpackPlugin("build.js")],
};