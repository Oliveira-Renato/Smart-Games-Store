import API from '../../services/API'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import "./styles.css"

export default function Details () {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await API.get(`games/${id}`);
      setData(response.data);
      if (response.data.lojas) {
        setPlataformas(response.data.lojas.split("/"));
      }
    } catch (error) {
      console.error("Erro ao busca-100r data:", error);
    }
  };

  return (
    <div className="mt-24 main_bg  overflow-hidden">
      <div className="h-[300px] overflow-hidden relative z-10">
        {/* Imagem com opacidade por trás */}
        <img src={data.imagem} alt="jogo" className="w-full h-full object-cover opacity-8" />
        {/* Imagem principal */}
        <img src={data.imagem} alt="jogo2" className="absolute top-0 object-contain" />
      </div>
      {/* Info */}
      <main className='paddingX main_bg'>
        <div className={`-mt-24 pb-14 paddingX relative second_bg`}>
          <div className='flex flex-wrap justify-around'>
            {/* card 1 */}
            <div className="third_bg p-10 rounded-b-3xl w-full md:w-[50%] h-fit z-20">
              <p className="text-white font-bold text-[40px]">{data.nome}</p>
              <div className="mt-1">
                <p className="text-white tracking-wider text-[18px] border-2 w-fit">{data.plataformas}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                  <div className="flex-1 flex flex-col">
                    <p className="text-white font-medium text-[16px]">R${data.preco}</p>
                  </div>
                </div>
              </div>
              {/* Botão comprar */}
              <button className="red_gradient w-full text-white px-4 py-2 my-2 rounded-md buy_button">Comprar</button>
            </div>

            {/* card 2 - descrição */}
            <div className='mt-10 md:mt-32 w-full md:w-[50%] lg:w-[40%]'>
              <p className="text-white">{data.descricao}</p>

              <div className='mt-6'>
                <p className='text-gray-400 text-sm mb-2'>Além de comprar aqui, você também pode encontrar em alguma de nossas lojas físicas:</p>
                {plataformas.length > 0 ? (
                  plataformas.map((item, index) => (
                    //nome da loja aqui
                    <Link key={index} to={`/maps/${item}`}>
                      <p className='list_item'> 🏬 {item}</p>
                    </Link>
                  ))
                ) : (
                  <p className='text-sm'>Nenhuma loja física encontrada.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}