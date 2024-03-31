import { SectionWrapper } from '../../hoc'
import { styles } from '../../styles'
import API from '../../services/API'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {

    handleFetchData();
  }, []);

  const handleFetchData = async () => {
    try {
      const response = await API.get(`/games/${id}`);
      setData(response.data)
    } catch (error) {
      console.error("Erro ao buscar data:", error);
    }
  }

  return (
    <section className='relative w-full h-screen flex justify-start items-center mx-auto'>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
          <div>
            <img src={data.imagem} alt={"jogo"} className="w-full" />
          </div>
        </div>
        {/* Description */}
        <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
          <div className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
            <p className="text-white font-bold text-[48px]">{data.nome}</p>
            
            <div className="mt-1">
              <p className="text-white tracking-wider text-[18px]">{data.plataformas}</p>

              <div className="mt-7 flex justify-between items-center gap-1">
                <div className="flex-1 flex flex-col">
                  <p className="text-white font-medium text-[16px]">
                    <span className="blue-text-gradient">R$</span> {data.preco}
                  </p>
                  <p className="mt-1 text-secondary text-[12px]">
                    não sei of aaasss
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Details, 'details')