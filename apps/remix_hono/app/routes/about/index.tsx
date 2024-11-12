import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'About' }, { name: 'description', content: 'Welcome to About' }]
}

export default function Index() {
  return <h1>About</h1>
}
