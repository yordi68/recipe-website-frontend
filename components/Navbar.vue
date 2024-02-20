<template>

    <nav class="sticky top-0 z-10 w-full h-20 bg-[#1f1d27] flex justify-between items-center px-20">
        <div>
            <NuxtLink to="/home">
                <img src="/berecipes.png" alt="">
            </NuxtLink>
        </div>
        
        <ul class="text-white flex justify-evenly w-2/5">
            <NuxtLink to="/home" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">Home</li>
            </NuxtLink>
            <NuxtLink to="/recipes" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">Recipes</li>
            </NuxtLink>
            <NuxtLink to="/about" exact-active-class="text-extrabold text-[#20c05c]">
                <li class="hover:text-[#20c05c]">About</li>
            </NuxtLink>
            <li>Sign In</li>
            
        </ul>
    

    </nav>


</template>

<script setup>


</script>