import { SectionWrapper } from '../../hoc'
import { styles } from '../../styles'
import API from '../../services/API'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Details = () => {
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
      console.error("Erro ao buscar data:", error);
    }
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      <div className="bg-tertiary h-[300px] overflow-hidden relative">
        {/* Imagem com opacidade por trás */}
        <img src={data.imagem} alt="jogo" className="w-full h-full object-cover" />
        {/* Imagem principal */}
        <img src={data.imagem} alt="jogo2" className="absolute top-0 object-contain" />
      </div>
      {/* Info */}
      <div className={`-mt-20 pb-14 ${styles.paddingX} relative`}>
        <div className='flex flex-wrap justify-around'>
          {/* card 1 */}
          <div className="bg-black-200 p-10 rounded-b-3xl w-full md:w-[50%] max-h-[280px] max-h-[380px]">
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
            <button className="bg-primary w-full text-white px-4 py-2 my-2 rounded-md hover:bg-primary-dark">Comprar</button>
          </div>

          {/* card 2 - descrição */}
          <div className='mt-10 md:mt-32 w-full md:w-[50%] lg:w-[40%]'>
            <p className="text-white">{data.descricao}</p>

            <div className='mt-6'>
              <p className='text-gray-400 text-sm mb-2'>Além de comprar aqui, você também pode encontrar em alguma de nossas lojas físicas:</p>
              {plataformas.length > 0 ? (
                plataformas.map((item, index) => (
                  <p className='text-sm text-red-400'>{item}</p>
                ))
              ) : (
                <p className='text-sm'>Nenhuma loja física encontrada.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Details, 'details')