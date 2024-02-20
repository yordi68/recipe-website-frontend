<template>

    <nav class="sticky top-0 z-10 w-full h-20 bg-black flex justify-between items-center px-20">
        <div>
            <NuxtLink to="/home">
                <img src="/berecipes.png" alt="">
            </NuxtLink>
        </div>

        <!-- Web Navigation -->
        <ul class="hidden text-white md:flex justify-evenly w-2/5">
            <NuxtLink to="/home" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">Home</li>
            </NuxtLink>
            <NuxtLink to="/recipes" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">Recipes</li>
            </NuxtLink>
            <NuxtLink to="/about" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">About us</li>
            </NuxtLink>
            <li>Sign In</li>
        </ul>

    
    <!-- Hamburger Button -->
    <div class="md:hidden flex items-center">
      <button @click="isOpen = !isOpen" class="md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <ul :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden text-white">
      <li>
        <NuxtLink to="/home" exact-active-class="text-extrabold text-[#20c05c]">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/recipes" exact-active-class="text-extrabold text-[#20c05c]">Recipes</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" exact-active-class="text-extrabold text-[#20c05c]">About us</NuxtLink>
      </li>
    </ul>
    

    </nav>


</template>

<script setup>
    import { ref } from 'vue'
    const isOpen = ref(false);

</script>