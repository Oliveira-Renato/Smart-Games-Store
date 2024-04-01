import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { logo } from '../assets'

const Navbar = () => {
  const [ active, setActive ] = useState('')
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div
        className='w-full flex justify-between items-center max-w-7xl mx-auto'
      >
        <Link
          to={'/'}
          className='flex items-center'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Smart Games Store</p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar