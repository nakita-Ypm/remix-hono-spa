import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to Home' }]
}

export default function Index() {
  return <h1>Hello</h1>
}
