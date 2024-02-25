<template>
  <aside class="h-5/6">
    <div class="h-full flex flex-col justify-between bg-white border-r shadow-sm">



      <ul class="flex-1 px-3 mt-10">
        <div class="flex flex-col space-y-4">
          
          <li
            class="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer"
            v-for="item in sidebarItems"
            :key="item.name"
            >
            <Icon :name="item.icon" size="32" />
            <NuxtLink 
              exact-active-class="text-extrabold text-[#20c05c]" 
              :to="item.to"
            >
              <span class="w-52 ml-3">{{ item.name}}</span>
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
const sidebarItems = [
  {name: 'Dashboard', icon: 'material-symbols:dashboard', to:'#'},
  {name: 'Add Recipe', icon: 'arcticons:recipe-keeper', to: '/user/addrecipe'},
  {name: 'Edit Profile', icon: 'gg:profile', to: '/user'},
  {name: 'My Recipes', icon: 'f7:square-favorites-alt-fill', to:'#'},
  {name: 'Settings', icon: 'tabler:settings', to:'#'},
]

</script>
  