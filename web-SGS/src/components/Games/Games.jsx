import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/API'; 
import "./styles.css"; 

// Componente de cartão de serviço
const ServiceCard = ({ title, icon }) => {
  return (
    <div className='xs:w-[250px] w-full cursor-pointer service_card'>
      {/* Card do jogo */}
      <div className='w-full red_gradient p-[1px] rounded-[20px] shadow-card overflow-hidden'>
        <div className='bg-black-100 rounded-t-[20px]'>
          {/* Imagem do jogo  */}
          <img src={icon} alt="icon" className='w-full h-[280px] object-cover' />
        </div>
        <div className='bg-black-100 rounded-b-[20px] py-3 px-6'>
          {/* Título do jogo */}
          <h3 className='text-white text-[20px] font-bold text-center overflow-hidden whitespace-nowrap'>{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default function Games() {
  const [data, setData] = useState([]); // Estado para armazenar os dados dos jogos

  // Efeito para buscar os dados dos jogos ao montar o componente
  useEffect(() => {
    handleFetchData();
  }, []);

  // Função para buscar os dados dos jogos da API
  const handleFetchData = async () => {
    try {
      const response = await API.get("games"); // Faz uma requisição GET para a rota 'games'
      setData(response.data); // Atualiza o estado com os dados recebidos da API
    } catch (error) {
      console.error("Erro ao buscar dados:", error); // Exibe um erro no console se houver algum problema na busca dos dados
    }
  };

  return (
    <section className='padding'>
      <div>
        {/* Título da seção */}
        <h2 className={"sectionHeadText"}>Confira nossos jogos</h2>
      </div>
      <p className='mt-4 sectionSubText'>
        {/* Descrição da seção */}
        Não perca as ofertas em nossos de jogos!
      </p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Mapeia os dados dos jogos e renderiza um link para cada jogo */}
        {data.map((game, index) => (
          <Link key={game.id} to={`/details/${game.id}`}> {/* Link para os detalhes do jogo */}
            {/* Componente de cartão de serviço para cada jogo */}
            <ServiceCard key={game.id} index={index} icon={game.imagem} title={game.nome} {...game} />
          </Link>
        ))}
      </div>
    </section>
  );
}
