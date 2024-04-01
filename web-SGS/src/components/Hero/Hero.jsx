export default function Hero () {
  return (
    <section className='relative w-full h-screen flex justify-start items-center mx-auto'>
      <div className={`paddingX max-w-7xl mx-auto flex flex-col gap-5`}>
        {/* info */}
        <div>
          <h1 className={`heroHeadText text-white`}>
            Smart Games {' '}
            <div className=" relative inline-block">
              <span className="text-[#FF5733] relative z-10">Store</span>
            </div>
          </h1>
          <p className={`heroSubText mt-2 text-white-100 text-center`}>
            Explore, compre, divirta-se!
          </p>
        </div>
      </div>
    </section>
  )
}