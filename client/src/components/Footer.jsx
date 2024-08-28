import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer class="bg-white font-sans">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-900 xl:text-2xl">Subscribe to our newsletter to get an update.</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-900 bg-gray-100 border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-900">Quick Links</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Home</p>
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Who We Are</p>
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Our Philosophy</p>
                </div>
            </div>

            <div>
                <p class="font-semibold text-gray-900">Industries</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Retail & E-Commerce</p>
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Information Technology</p>
                    <p class="text-gray-700 transition-colors duration-300 hover:text-blue-500 hover:underline hover:cursor-pointer">Finance & Insurance</p>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-300 md:my-8" />
        
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div class="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" />
            </div>
        </div>
        <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4 text-gray-600">© 2023 Your Company Inc. All rights reserved.</p>
    </div>
</footer>
    </div>
  )
}

export default Footer
