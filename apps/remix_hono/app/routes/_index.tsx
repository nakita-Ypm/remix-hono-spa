import type { MetaFunction } from '@remix-run/node'
import { hc } from 'hono/client'
import { useState } from 'react'
import { AppType } from 'server'

export const meta: MetaFunction = () => {
  return [{ title: 'Remix Hono🔥 SPA' }, { name: 'description', content: 'Welcome to Remix Hono🔥 SPA' }]
}

export default function Index() {
  const [message, setMessage] = useState('')

  const onSubmit = async () => {
    const client = hc<AppType>('/')
    const res = await client.api.$get()
    const data = await res.json()
    setMessage(data.message)
  }
  return (
    <>
      <h1>Remix + Hono🔥 RPC</h1>
      <button onClick={onSubmit}>Get Message</button>
      <h1>{message}</h1>
    </>
  )
}
