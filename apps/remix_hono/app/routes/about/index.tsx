import type { MetaFunction } from '@remix-run/node'
import Header from '../../components/Header'

export const meta: MetaFunction = () => {
  return [{ title: 'About' }, { name: 'description', content: 'Welcome to About' }]
}

export default function Index() {
  return (
    <>
      <Header />
      <h1>About</h1>
    </>
  )
}
