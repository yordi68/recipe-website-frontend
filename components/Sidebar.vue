<template>
  <aside class="h-screen">
    <div class="h-full flex flex-col justify-between bg-white border-r shadow-sm">



      <div class="p-4 pb-2 flex justify-between items-center border-b">
        <img src="https://img.logoipsum.com/243.svg" class="w-32" alt="" />
        <button class="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
          <Icon name="tabler:layout-sidebar-left-collapse" />
        </button>
      </div>



      <ul class="flex-1 px-3">

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
        <img src="" alt="" />
        <div class="flex flex-col ml-3">
          <h4 class="font-semibold">John Doe</h4>
          <span class="text-xs text-gray-600">johndoe@gmail.com</span>
        </div>
      </div>


    </div>
  </aside>
</template>
  
<script setup>

</script>
  