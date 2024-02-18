<template>
    <Nuvbar />

    <div class="relative bg-cover bg-center h-64"
        style="background-image: url('/background-recipe.jpg'); background-size: 140%;">
        <p class="absolute text-sm text-[] bottom-28 left-20">RECIPES</p>
        <h1 class="absolute text-4xl font-bold bottom-16 left-20">Discover our amazing dishes!</h1>
    </div>


    <div class="grid grid-cols-3 gap-y-8 my-10 w-4/5  items-center justify-center mx-auto">
        <div v-for="recipe in recipes">
            <Card  :recipe="recipe" :key="recipe.name"/>
        </div>

        <div v-for="recipe in recipes">
            <Card  :recipe="recipe" :key="recipe.name"/>
        </div>
    </div>

    <Footer />
</template>

<script setup>
const recipes = [
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-1.jpg'
    },
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-2.jpg'
    },
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-3.jpg'
    },
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-4.jpg'
    },
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-5.jpg'
    },
    {
        author: 'Yonatan Tesfaye',
        date: 'July 12, 2018',
        name: 'Spaghetti with tomato sauce',
        description: 'Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie ultricies porta urna.',
        likes: '64',
        imageUrl: '/recipe-6.jpg'
    },
]


</script>