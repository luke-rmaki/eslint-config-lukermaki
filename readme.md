# My Preferred Eslint and Prettier Setup

ESLint and Prettier setup bundled in a package. Forkered from [here](https://github.com/wesbos/eslint-config-wesbos).

## Local / Per Project Install

1. Install package and deps.

```
npx install-peerdeps --dev eslint-config-rmaki
```

1. Create a `.eslintrc` file. Your `.eslintrc` file should look like this:

```json
{
  "extends": ["rmaki"]
}
```

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

<!--
## Global Install

> Note: Global Install may not be working as it's been removed in ESLint 7.x. Investigating now...

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-wesbos
```

(**note:** npx is not a spelling mistake of **npm**. `npx` comes with when `node` and `npm` are installed and makes script running easier 😃)

2. Then you need to make a global `.eslintrc` file:

ESLint will look for one in your home directory

- `~/.eslintrc` for mac
- `C:\Users\username\.eslintrc` for windows

In your `.eslintrc` file, it should look like this:

```json
{
  "extends": ["wesbos"]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next. -->

## With VS Code

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Change the following settings:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.

## With Create React App

1. Run `npx install-peerdeps --dev eslint-config-rmaki`
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "rmaki"`

## With Gatsby

1. Run `npx install-peerdeps --dev eslint-config-rmaki`
1. If you have an existing `.prettierrc` file, delete it.
1. follow the `Local / Per Project Install` steps above

## With Typescript

Needs some instructions [from here](https://github.com/wesbos/eslint-config-wesbos/issues/33)
