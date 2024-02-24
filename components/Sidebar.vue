<template>
  <aside class="h-5/6">
    <div class="h-full flex flex-col justify-between bg-white border-r shadow-sm">



      <ul class="flex-1 px-3 mt-10">
        <div class="flex flex-col space-y-4">
          
          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer">
            <Icon name="material-symbols:dashboard" size="32" />
            <NuxtLink exact-active-class="text-orange-500 dark:text-[#B9B4C7]" to="#">
              <span class="w-52 ml-3">Dashboard</span>
            </NuxtLink>
          </li>


          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer ">
            <Icon name="f7:square-favorites-alt-fill" size="32" />
            <NuxtLink exact-active-class="text-orange-500 dark:text-[#B9B4C7]" to="/user/addRecipe">
              <span class="w-52 ml-3">Add Recipe</span>
            </NuxtLink>
          </li>


          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer">
            <Icon name="gg:profile" size="32" />
            <NuxtLink exact-active-class="text-orange-500 dark:text-[#B9B4C7]" to="/user">
              <span class="w-52 ml-3">Edit Profile</span>
            </NuxtLink>
          </li>


          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer">
            <Icon name="arcticons:recipe-keeper" size="32" />
            <NuxtLink exact-active-class="text-orange-500 dark:text-[#B9B4C7]" to="#">
              <span class="w-52 ml-3">My Recipes</span>
            </NuxtLink>
          </li>


          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer">
            <Icon name="tabler:settings" size="32" />
            <NuxtLink exact-active-class="text-orange-500 dark:text-[#B9B4C7]" to="#">
              <span class="w-52 ml-3">Settings</span>
            </NuxtLink>
          </li>

        </div>
      </ul>

      <div class="border-t flex p-3 items-center">
        <div class="ml-3">
          <Button label="Logout" severity="Primary" class="bg-[#20c05c] px-6 py-2 rounded-md"/>
        </div>
      </div>


    </div>
  </aside>
</template>
  
<script setup>

import Button from 'primevue/button';

</script>
  