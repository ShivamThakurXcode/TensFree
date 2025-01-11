const Hero = () => {
  return (
    <div className="overflow-x-hidden ">
      <section className="pt-12  sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="px-6 mx-auto w-fit text-sm bg-transparent backdrop-blur-md border rounded-full text-gray-400 font-inter">
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
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-gray-200 transition-all duration-200 bg-orange-600 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
                role="button"
              >
                Get more
              </a>

              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-200 transition-all duration-200 border-[1px] border-orange-400  sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 hover:bg-orange-700 focus:bg-orange-700 hover:text-gray-200 focus:text-gray-200 hover:border-orange-700 focus:border-orange-700"
                role="button"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                    stroke-width="2"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                free demo
              </a>
            </div>

            <p className="mt-8 text-base text-gray-400 font-inter">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
