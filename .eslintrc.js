module.exports = {
	root: true,
	env: {
		node: true,
	},
	plugins: [
		"es-beautifier",
		"vue",
	],
	extends: [
		"plugin:vue/recommended",
		"plugin:es-beautifier/standard",
		"@vue/typescript",
	],
	rules: {
		"no-unused-vars": "off",
		"no-console": "off",
		"no-tabs": "off",
		"indent": [
			"warn",
			"tab",
		],
		"semi": [
			"warn",
			"never",
		],
		"linebreak-style": "off",
		"vue/no-unused-components": "warn",
		"vue/no-unused-vars": "warn",
		"vue/html-closing-bracket-newline": "warn",
		"vue/html-closing-bracket-spacing": "warn",
		"vue/html-end-tags": "error",
		"vue/html-indent": [
			"warn",
			"tab",
		],
		"vue/script-indent": [
			"warn",
			"tab",
		],
		"vue/html-quotes": [
			"warn",
			"single",
		],
		"vue/no-spaces-around-equal-signs-in-attribute": "warn",
		"vue/attributes-order": "warn",
		"vue/no-confusing-v-for-v-if": "warn",
		"vue/no-v-html": "error",
		"vue/order-in-components": "warn",
		"vue/this-in-template": "error",
		"vue/eqeqeq": "warn",
		"vue/match-component-file-name": "error",
		"vue/script-indent": "warn",
		"no-mixed-spaces-and-tabs": [
			"warn",
			"smart-tabs",
		],
		"vue/html-self-closing": "off",
		"vue/max-attributes-per-line": "off",
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
}
