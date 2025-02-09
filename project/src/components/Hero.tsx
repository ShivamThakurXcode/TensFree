const Hero = () => {
  return (
    <div className="overflow-x-hidden ">
      <section className="pt-12  sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-4 mx-auto w-fit text-base sm:text-sm md:text-sm bg-transparent backdrop-blur-md border rounded-full text-gray-400 font-inter">
              Smart email campaign builder, made for Developers
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight text-gray-200 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
              Unlock your job search potential with
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44ffe0] via-[#FF44EC] to-[#FF675E] blur-2xl filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative"> TensFree </span>
              </span>
            </p>

            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-5 py-3 text-md  text-gray-200 transition-all duration-200 bg-orange-600 border-2 border-transparent sm:w-auto rounded-lg  hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                role="button"
              >
                Get more
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-5 py-3 text-md  text-gray-200 transition-all duration-200 border-[1px] border-orange-400  sm:w-auto sm:mt-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 hover:bg-orange-700 focus:bg-orange-700 hover:text-gray-200 focus:text-gray-200 hover:border-orange-700 focus:border-orange-700"
                role="button"
              >
                free demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
