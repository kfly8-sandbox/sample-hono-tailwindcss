import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        {!!import.meta.env ? (
          <link href="/src/style.css" rel="stylesheet" />
        ) : (
          <link href="/static/style.css" rel="stylesheet" />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
})
