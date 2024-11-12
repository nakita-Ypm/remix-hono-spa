import { Link } from '@remix-run/react'

const Header = () => {
  return (
    <>
      <Link to='/'>/</Link>;<Link to='/home'>Home</Link>;<Link to='/about'>About</Link>;
    </>
  )
}

export default Header
