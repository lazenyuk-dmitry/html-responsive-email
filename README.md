README
==================================================================================
Made with [mjml](https://mjml.io/) and gulp.
----------------------------------------------------------------------------------


For build run command `npm run build` <br>
For development run command `npm run dev`

Better to use vscode with a plugin MJML. This will provide syntax highlighting and autocomplete and will display errors as well.
https://github.com/mjmlio/vscode-mjml

mjml doc: https://mjml.io/documentation/
mjml plugins for text editor: https://documentation.mjml.io/#applications-and-plugins

### Env injection.
You can inject env variables into templates <br>
https://www.npmjs.com/package/gulp-inject-envs <br>
Example <br>
Assets path already set `env ASSETS_PATH=/assets` <br> 
Available in templates like `<ENV::ASSETS_PATH>` <br>

### File and directories.
`dist` - build output directory and server root.  <br>
`src/assets` - assets directory. <br>
`src/components` - mjml templates for include https://mjml.io/documentation/#mj-include. <br>
`src/pages` - email pages. <br>