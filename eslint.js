module.exports = {
    "extends": "airbnb",
    "rules": {
        "no-prototype-builtins": "off",
        "import/no-webpack-loader-syntax": "off",
        "no-plusplus": "off",
        "no-underscore-dangle": "off",
        "indent": [
            "error",
            4
        ],
        "eqeqeq": [
            "error",
            "smart"
        ],
        "no-restricted-syntax": [
            "error",
            {
                "selector": "LabeledStatement",
                "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
            },
            {
                "selector": "WithStatement",
                "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
            }
        ],
        "object-curly-newline": [
            "error",
            {
                "multiline": true
            }
        ],
        "no-restricted-properties": [
            "error",
            {
                "object": "arguments",
                "property": "callee",
                "message": "arguments.callee is deprecated"
            },
            {
                "object": "global",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "self",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "window",
                "property": "isFinite",
                "message": "Please use Number.isFinite instead"
            },
            {
                "object": "global",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "self",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "object": "window",
                "property": "isNaN",
                "message": "Please use Number.isNaN instead"
            },
            {
                "property": "__defineGetter__",
                "message": "Please use Object.defineProperty instead."
            },
            {
                "property": "__defineSetter__",
                "message": "Please use Object.defineProperty instead."
            }
        ],
        "max-len": [
            "error",
            150,
            4,
            {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreRegExpLiterals": true,
                "ignoreStrings": true,
                "ignoreTemplateLiterals": true
            }
        ],
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 4,
                "maxBOF": 0,
                "maxEOF": 0
            }
        ]
    }
};