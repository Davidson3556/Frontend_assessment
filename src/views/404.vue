<template>
  <div class="h-full w-full bg-gray-50 flex items-center">
    <div
      class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700"
    >
      <div class="w-full lg:w-1/2 mx-8">
        <div class="text-7xl text-[#3C3B6E] font-dark font-extrabold mb-8">
          404
        </div>
        <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
          Sorry we couldn't find the page you're looking for
        </p>

        <a
          href="/"
          class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-[#3C3B6E] hover:bg-[#3C3B6E59]"
          >back to homepage</a
        >
      </div>
      <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
        <img
          src="https://res.cloudinary.com/dufimctfc/image/upload/v1737998936/error_n8v0ln.svg"
          class=""
          alt="Page not found"
        />
      </div>
    </div>
  </div>
</template>
