/*
 * @Author: Jin X
 * @Date: 2020-07-11 15:53:42
 * @LastEditTime: 2020-07-11 16:12:09
 */

const template = ({ name }) => {
    return `
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <script>window.__USERNAME__ = \'${name}\'</script>
          <title>Welcome! ${name}</title>
        </head>
        <body>
          <h1 class="todo-header">todos</h1>
          <div id="root"></div>
          <script src="app.js"></script>
        </body>
      </html>`;
};

module.exports = template;;