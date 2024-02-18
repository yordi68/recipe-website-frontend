<template>
    <div class="min-h-full">
        <Navbar />
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <AddRecipe />
            </div>
        </main>
    </div>
</template>


<script setup>
definePageMeta({
  layout: 'custom'
})
</script>
