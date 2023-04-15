# Html Responsive Email Boilerplate

[![Russian Federation](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/ru.png "Russian Federation") Russian README](README_RU.md)

This is a starter boilerplate for a simple layout of responsive emails based on **[MJML](https://mjml.io/)** and **Gulp**.

Possibilities:

- Develop emails using the **MJML** framework in the code editor using **Gulp**.
- Using environment variables. For example, to load local images during development and replace asset paths during build with remote resources.

[See documentation](#documentation).

## Editor and plugins

Recommended to use **[Visual Studio Code](https://code.visualstudio.com/Download)** + **[MJML Plugin](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode- mjml)**

## Get started

- `npm run install` - to install all dependencies.
- `npm run dev` - to develop and run a server with hot reload.
- `npm run build` - to build all emails and minify the code.

## Documentation

Framework documentation of **[MJML here](https://mjml.io/documentation/)**
  
### ENV Injection

You can embed env variables in templates. The plugin **[gulp-inject-envs](https://www.npmjs.com/package/gulp-inject-envs)** is used.

Example:

- Path to resources, already set as `env ASSETS_PATH=/assets`, see [package.json](package.json) `build` and `dev` scripts. you can set different variables for different environments.
- Available in templates like `<ENV::ASSETS_PATH>`.
   For example:

   ``` Html
     <img src="<ENV::ASSETS_PATH>/logo.png" alt="Logo">
   ```

## Recommended directory structure

- `dist` - build output directory and server root.
- `src/assets` - resources directory.
- `src/components` - *MJML* templates to include. [Documentation](https://mjml.io/documentation/#mj-include).
- `src/pages` - e-mail pages.
