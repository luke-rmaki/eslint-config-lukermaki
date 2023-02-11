# Eslint & Prettier Setup (forked from [Wes Bos](https://github.com/wesbos/eslint-config-wesbos))


## Project Install
1. Install eslint, prettier, and this config
```
pnpm install -D eslint prettier
```

```
pnpm install eslint-config-lukermaki
```

(Optional) install typescript and init if using it
```
pnpm install -D typescript
npx tsc --init
```


2. Put the eslint settings in a file in the root of the project.

<br />

E.g. **in package.json**, add this anywhere top level.

```json
"eslintConfig": {
  "extends": ["lukermaki"]
}
```

Or put this in a `.eslintrc` file

```json
{
  "extends": ["lukermaki"]
}
```

For TypeScript projects, use `lukermaki/typescript`. There needs to be a tsconfig file

```json
{
  "extends": ["lukermaki/typescript"]
}
```


### Prettier Rules
If you want custom [prettier options](https://prettier.io/docs/en/options.html), it's recommended to create a `.prettierrc` file in your root directory:

```js
{
  "singleQuote": true,
  "endOfLine": "auto",
  "tabWidth": 4
}
```

You can also put this in your EsLint config as a rule like so:

```json
{
  "extends": ["lukermaki"],
  "rules": {
    ... any eslint rules here
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "endOfLine": "auto",
        "tabWidth": 4
      },
    ],
  }
}
```

Note if you are switching to double quotes, you'll also need to add this eslint rule, or they will fight to the death!

```js
quotes: ["error", "double"];
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript][javascriptreact][typescript][typescriptreact]": {
  "editor.formatOnSave": false
},
// show eslint icon at bottom toolbar
"eslint.alwaysShowStatus": true,
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Restart VSCode
