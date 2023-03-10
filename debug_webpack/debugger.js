// eslint-disable-next-line node/no-unpublished-require
const webpack = require("../lib/webpack.js");
const config = require("./webpack.config");
// 创建一个complier对象
const complier = webpack(config);
// 执行compiler.run方法开始编译代码，回调方法用于反馈编译的状态
complier.run((err, stats) => {
	// 如果运行时报错输出报错
	if (err) {
		console.error(err);
	} else {
		// stats webpack内置的编译信息对象
		console.log(stats);
	}
});
