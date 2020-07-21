README
==================================================================================
Made with [mjml](https://mjml.io/) and gulp.
----------------------------------------------------------------------------------


For build run command `npm run build` <br>
For development run command `npm run dev`

mjml doc: https://mjml.io/documentation/

### Env injection.
You can inject env variables into templates <br>
https://www.npmjs.com/package/gulp-inject-envs <br>
Example <br>
Assets path `env ASSETS_PATH='...'` <br> 
Available like `<ENV::ASSETS_PATH>` <br>

### File and directories.
`dist` - build output directory and server root.  <br>
`src/assets` - assets directory. <br>
`src/components` - mjml templates for include https://mjml.io/documentation/#mj-include. <br>
`src/pages` - email pages. <br>