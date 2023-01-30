class HelloWorldPlugin {
	apply(compiler) {
		compiler.hooks.done.tap(
			"Hello1 World Plugin",
			(
				compilation /* compilation is passed as an argument when done hook is tapped.  */
			) => {
				console.log("Hello2 World!");
			}
		);
	}
}

module.exports = HelloWorldPlugin;
