const Page404 = () => {
    return (
        <>
            <section class=" da:bg-gray-900 h-[100%] ">
                <div class="container h-[100%] px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div class="wf-ull lg:w-1/2">
                        <p class="text-sm font-medium text-blue-500 da:text-blue-400">404 error</p>
                        <h1 class="mt-3 text-2xl font-semibold text-gray-800 da:text-white md:text-3xl">Page not found</h1>
                        <p class="mt-4 text-gray-500 da:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                        <div class="flex items-center mt-6 gap-x-3">
                            <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto da:hover:bg-gray-800 da:bg-gray-900 hover:bg-gray-100 da:text-gray-200 da:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>
                                <span>Go back</span>
                            </button>

                            <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 da:hover:bg-blue-500 da:bg-blue-600">
                                Take me home
                            </button>
                        </div>
                    </div>

                    <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img class="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Page404