import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets'

export default function Navbar () {
  // Define o estado para controlar se a página foi rolada ou não
  const [scrolled, setScrolled] = useState(false);

  // Efeito para adicionar ouvinte de evento de rolagem
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Obtém o valor do deslocamento vertical da página
      // Atualiza o estado dependendo se o deslocamento for maior que 100 pixels
      setScrolled(scrollTop > 100);
    };

    // Adiciona o ouvinte de evento de rolagem quando o componente é montado
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento de rolagem quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); 

  return (
    // Barra de navegação com classes condicionais dependendo se a página foi rolada ou não
    <nav className={`paddingX w-full flex items-center py-5 fixed top-0 z-30 
      ${
        scrolled ? "red_gradient" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Link para a página inicial */}
        <Link to={'/'} className='flex items-center' onClick={() => {window.scrollTo(0, 0)}}>
          {/* Logo da loja */}
          <img src={logo} alt='logo' className='w-16 h-16 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Smart Games Store</p>
        </Link>
      </div>
    </nav>
  )
}