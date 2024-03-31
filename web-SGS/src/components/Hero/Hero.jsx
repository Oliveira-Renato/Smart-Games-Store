import { styles } from '../../styles'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex justify-start items-center mx-auto'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col gap-5`}>
        {/* info */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Smart Games {' '}
            <div className="hexagon-container relative inline-block">
              <span className="text-[#FF5733] relative z-10">Store</span>
            </div>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center`}>
            Explore, compre, divirta-se!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero