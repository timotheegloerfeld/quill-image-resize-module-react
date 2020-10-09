var path = require("path");

module.exports = {
	entry: "./src/ImageResize.js",
	output: {
		path: __dirname,
		library: "ImageResize",
		libraryTarget: "umd",
		filename: "image-resize.min.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								["@babel/preset-env", { modules: false }],
							],
							plugins: [
								"@babel/plugin-proposal-class-properties",
							],
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "raw-loader",
					},
				],
			},
		],
	},
};
