import type { MetaFunction } from '@remix-run/node'
import { Link } from "@remix-run/react";
import { useState } from 'react'
import { hc } from 'hono/client'
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
      <Link to="/">/</Link>;
      <Link to="/home">Home</Link>;
      <Link to="/about">About</Link>;
      <h1>Remix + Hono🔥 SPA</h1>
      <button onClick={onSubmit}>Get Message</button>
      <h1>{message}</h1>
    </>
  )
}
