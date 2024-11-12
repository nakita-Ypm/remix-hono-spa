import type { MetaFunction } from '@remix-run/node'
import Header from '../../components/Header'

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }, { name: 'description', content: 'Welcome to Home' }]
}

export default function Index() {
  return (
    <>
      <Header />
      <h1>home</h1>
    </>
  )
}
