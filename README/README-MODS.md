# Mods

Application modifications to add View Transitions and implement TypeScript ES Version differences

## Add Astro Extension to VSCode 
Astro - [Language Support for Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

## Add ViewTransitions to BaseHead in application
```sh
import { ViewTransitions } from 'astro:transitions';
<ViewTransitions />
```

## Typescript
```sh
$ npm tsc -v
9.6.4
```

## Downgrade tsc to 4.9.5 - unable to do so far

```sh
$ tsc -v
Version 5.0.4

$ tsc
error TS5096: Option 'allowImportingTsExtensions' can only be used when either 'noEmit' or 'emitDeclarationOnly' is set.

tsconfig.json:8:15 - error TS5107: Option 'target=ES3' is deprecated and will stop functioning in TypeScript 5.5. Specify compilerOption '"ignoreDeprecations": "5.0"' to silence this error.

8     "target": "es3",
                ~~~~~


Found 2 errors in the same file, starting at: tsconfig.json:8
```

## TS removed options

```sh
"emitDeclarationOnly": true,
"declaration": true
"allowImportingTsExtensions": false
```

## added sass
```bash
npm -D i sass
```

## added mdx - 01/17/2024
```bash
$ npx astro add mdx
✔ Resolving packages...

  Astro will run the following command:
  If you skip this step, you can always run it yourself later

 ╭───────────────────────────╮
 │ npm install @astrojs/mdx  │
 ╰───────────────────────────╯

✔ Continue? … yes
✔ Installing dependencies...
  
   success  Configuration up-to-date.
```

