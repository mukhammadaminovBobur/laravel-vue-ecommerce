<template>
  <div class="flex">

    <nav class="main-menu text-blue-100 bg-blue-800 h-screen flex flex-col justify-between w-3/12">

      <div class="nav-top p-3">
        <ul class="flex flex-col space-y-2 p-4">
          <li class="bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out">
            <a href="#" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span class="nav-text">
                Dashboard
              </span>
            </a>
          </li>
          <li class="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out">
            <a href="#" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              <span class="nav-text">
                Products
              </span>
            </a>
          </li>
          <li class="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out">
            <a href="#" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span class="nav-text">
                Users
              </span>
            </a>
          </li>
          <li class="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out">
            <a href="#" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>

              <span class="nav-text">
                Reports
              </span>
            </a>
          </li>

        </ul>

      </div>

      <ul class="logout p-4">
        <li class="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out">
          <a href="#" class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 pr-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
            </svg>

            <span class="nav-text">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </nav>

    <div id="main-content" class="bg-gray-100 w-full flex flex-col">

      <div id="search-header" class="shadow h-16 px-4 flex items-center justify-between text-gray-600">

        <div class="capitalize">
          <i class="fa fa-search mr-4"></i>
          search
        </div>

        <div class="flex items-center">
          <i class="fa fa-bell mr-4"></i>
          <img src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user avatar" class="rounded-full h-6" />

        </div>
      </div>




      <div id="content-area" class=" bg-gray-300 text-gray-800 p-8 h-full">
        <h2 class="capitalize text-2xl font-semibold text-blue-800">dashboard</h2>
        <div class="h-64 border-2 border-blue-800 rounded border-dashed p-4 my-4"></div>
      </div>


    </div>

  </div>
</template>

<script setup>

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]
</script>
