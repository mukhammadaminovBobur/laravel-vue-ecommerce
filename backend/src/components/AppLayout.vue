<template>
  <div class="flex">

    <nav class="main-menu text-blue-100 bg-blue-800 h-screen flex flex-col justify-between w-3/12">

      <div class="nav-top p-3">
        <ul class="flex flex-col space-y-2 p-4">
          <li v-for="navigation in navigations" :class="[this.$route.name === navigation.to.name ? 'bg-blue-900' : 'hover:bg-blue-900', 'p-2 rounded-lg transition-bg duration-500 ease-out']">
            <router-link :to="navigation.to" class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>
              <span class="nav-text">
                {{ navigation.name }}
              </span>
            </router-link>
          </li>

        </ul>

      </div>

      <ul class="logout p-4">
        <li class="hover:bg-blue-900 p-2 rounded-lg transition-bg duration-500 ease-out" @click="logout">
          <a class="flex">
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
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script setup>

  import router from "../router/index.js";
  import store from "../store/index.js";

  function logout(){
    store.commit('logout')
    router.push({name:'login'})
  }

  const navigations = [
    { name: 'Dashboard', to: { name: 'app.dashboard' }, },
    { name: 'Products', to: { name: 'app.products' }, },
  ]
</script>
