import React from 'react';

function Card({username,color}){
    console.log(username)
    return (
        <div className="bg-white rounded-xl h-[600px] w-[1000px]">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{username}</h2>

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div className="group relative">
        <img src="https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"/>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                hello
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{color}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

     
    </div>
  </div>
</div>
    )
}

export default Card