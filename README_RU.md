# Html Responsive Email Boilerplate

[![United States](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/us.png "United States") English README](README.md)

Это стартовый boilerplate для простой верстки адаптивный электронных писем основанный на  **[MJML](https://mjml.io/)** и **Gulp**.

Возможности:

- Разработка писем используя фреймворк **MJML** в редакторе кода используя **Gulp**.
- Использование переменных окружения. Например для подгрузки локальных картинок во время разработки и замены путей ассетов во время сборки на удаленные ресурсы.

[Смотрите документацию](#документация).

## Редактор и плагины

Рекомендуется использовать **[Visual Studio Code](https://code.visualstudio.com/Download)** + **[MJML Plugin](https://marketplace.visualstudio.com/items?itemName=attilabuti.vscode-mjml)**

## Начало работы

- `npm run install` - для установки всех зависимостей.
- `npm run dev` - для разработки и запуска сервера с горячей перезагрузкой.
- `npm run build` - для сборки всех писем и минификации кода.

## Документация

Документация по фреймворку **[MJML здесь](https://mjml.io/documentation/)**
  
### ENV Enjection

Вы можете вставлять переменные env в шаблоны. Используется плагин **[gulp-inject-envs](https://www.npmjs.com/package/gulp-inject-envs)**.

Пример:

- Путь к ресурсам, уже задан как `env ASSETS_PATH=/assets`, смотрите [package.json](package.json) `build` и `dev` скрипты. можно установить разные переменные для разных окружений.
- Доступно шаблонах, как `<ENV::ASSETS_PATH>`.
  Например:

  ``` Html
    <img src="<ENV::ASSETS_PATH>/logo.png" alt="Logo">
  ```

## Рекомендуемая структура каталогов

- `dist` - построить выходной каталог и корень сервера.
- `src/assets` - каталог ресурсов.
- `src/components` - шаблоны *MJML* для включения. [Документация](https://mjml.io/documentation/#mj-include).
- `src/pages` - страницы электронной почты.
