export const previewTemplate = (code: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Code Preview</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js" crossorigin></script>
    <style>
      body { 
        margin: 0; 
        padding: 20px; 
        font-family: system-ui, sans-serif;
        background: white;
      }
      #root { 
        max-width: 800px; 
        margin: 0 auto; 
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      ${code}
    </script>
  </body>
</html>
`; 