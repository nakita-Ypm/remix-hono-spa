import { Hono } from 'hono'

const app = new Hono()

const routes = app.get('/api', (c) => {
  return c.json({ message: 'Remix + Hono🔥' })
})

export type AppType = typeof routes

export default app
