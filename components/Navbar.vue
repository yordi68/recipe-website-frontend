<template>
  <div class="sticky top-0 z-10">
    <Disclosure as="nav" class="bg-[#1e1d26]" v-slot="{ open }">
      <div class="mx-auto w-full  md:h-20 px-4 sm:px-6 lg:px-32">
        <div class="flex h-full  items-center justify-between ">

          <div class="flex items-center justify-between w-full">
            <div>
              <NuxtLink to="/home">
                <img src="/berecipes.png" alt="">
              </NuxtLink>
            </div>


            <div class="hidden md:block flex items-center space-x-12 text-white">
              <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to"
                exact-active-class="text-extrabold text-[#20c05c] w-20">{{ item.name }}</NuxtLink>
            </div>


            <!-- <button @click="showSignInModal" class="cursor-pointer">Sign In</button>s
              <Button label="Sign in" @click="showSignInModal" class="bg-[#20c05c] !w-30 whitespace-nowrap px-4 py-2 rounded-md cursor-pointer" />
              <SignIn v-if="isSignInModalVisible" @close="hideSignInModal" /> -->





          </div>






          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>



        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <NuxtLink v-for="item in navigation" :key="item.name" :to="item.to">
            <DisclosureButton :key="item.name"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              exact-active-class="text-extrabold text-[#20c05c]">
              {{ item.name }}
            </DisclosureButton>
          </NuxtLink>
        </div>
      </DisclosurePanel>

    </Disclosure>










  </div>
</template>
  
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Recipes', to: '/recipes', current: false },
  { name: 'About us', to: '/about', current: false },
  { name: 'Sign in', to: '/signin', current: false },
  // { name: 'Reports', to: '#', current: false },
]

// const userNavigation = [
//   { name: 'Your Profile', to: '#' },
//   { name: 'Settings', to: '#' },
//   { name: 'Sign out', to: '#' },
// ]


const isSignInModalVisible = ref(false);

function showSignInModal() {
  isSignInModalVisible.value = true;
}

function hideSignInModal() {
  isSignInModalVisible.value = false;
}


{/* <template>
  <div>
    <button @click="showSignInModal">Sign In</button>
  </div>
</template> */}



</script>