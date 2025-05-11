export const previewTemplate = (code: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { 
        margin: 0; 
        padding: 20px;
        font-family: system-ui, -apple-system, sans-serif;
      }
      #root { 
        display: flex; 
        justify-content: center; 
        align-items: center; 
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      try {
        ${code}
      } catch (error) {
        document.getElementById('root').innerHTML = 
          '<div style="color: red; padding: 20px;">Error: ' + error.message + '</div>';
      }
    </script>
  </body>
</html>
`; 