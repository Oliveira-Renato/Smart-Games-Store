export default function Hero () {
  return (
    <section className='relative w-full h-screen flex justify-start items-center mx-auto'>
      <div className={`paddingX max-w-7xl mx-auto flex flex-col gap-5`}>
        {/* info */}
        <div>
          <h1 className={`heroHeadText text-white gray-gradient px-12 rounded-md`}>
            Smart Games {' '}
            <div className=" relative inline-block">
              <span className="red_200 relative z-10">Store</span>
            </div>
          </h1>
          <p className={`heroSubText text-center text-white  self-center rounded-md`}>
            Explore, compre, divirta-se!
          </p>
        </div>
      </div>
    </section>
  )
}