import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./styles.css"
import API from '../../services/API';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full cursor-pointer'>
      <div className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'>
        <div className='bg-black-100 rounded-t-[20px]'>
          <img src={icon} alt="icon" className='w-full h-[280px] object-cover' />
        </div>
        <div className='bg-black-100 rounded-b-[20px] py-3 px-6'>
          <h3 className='text-white text-[20px] font-bold text-center overflow-hidden whitespace-nowrap'>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default function Games() {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await API.get("games");
      setData(response.data)
    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  }

  return (
    <section className='padding'>
      <div>
        <p className={"sectionSubText"}>
          Explore e
        </p>
        <h2 className={"sectionHeadText"}>Confira nossos jogos</h2>
      </div>

      <p className='mt-4 text-secondary text-[17px] max-x-3xl leading-[30px]'>
        Não perca as ofertas em nossos de jogos!
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {data.map((game, index) => (
          <Link key={game.id} to={`/details/${game.id}`}>
            <ServiceCard key={game.id} index={index} icon={game.imagem} title={game.nome} {...game} />
          </Link>
        ))}
      </div>
    </section>
  )
}