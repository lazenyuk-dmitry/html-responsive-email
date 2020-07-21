README
==================================================================================
Made with [mjml](https://mjml.io/) and gulp.
----------------------------------------------------------------------------------


For build run command `npm run build` <br>
For development run command `npm run dev`

mjml doc: https://mjml.io/documentation/

###Env injection. <br>
You can inject env variables into templates
https://www.npmjs.com/package/gulp-inject-envs
Example
Assets path `env ASSETS_PATH='...'` 
Available like `<ENV::ASSETS_PATH>`

###File and directories.
`dist` - build output directory and server root. 
`src/assets` - assets directory.
`src/components` - mjml templates for include https://mjml.io/documentation/#mj-include.
`src/pages` - email pages.