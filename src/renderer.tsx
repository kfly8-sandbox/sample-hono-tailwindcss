import { jsxRenderer,useRequestContext } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  const c = useRequestContext()

  return (
    <html>
      <head>
        {c.env.MODE === 'client' ? (
          <link href="/static/style.css" rel="stylesheet" />
        ) : (
          <link href="/src/style.css" rel="stylesheet" />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
})
