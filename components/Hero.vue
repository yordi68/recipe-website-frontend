<template>
    <div class="relative bg-cover bg-center h-screen"
        style="background-image: url('/hero-background-5.jpg'); background-size: 150%;">

        <div class="absolute w-1/3 left-32 top-36 space-y-6">
            <p class="text-[#20c05c] text-sm font-bold">WELCOME</p>
            <h2 class="text-4xl font-extrabold">Easy recipes for any occasion</h2>
            <p class="text-md font-thin">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin risus erat, fringilla vel purus
                sit amet, mattis porta enim. Duis fermentum faucibus est.
            </p>
        </div>
    </div>

    <div class="grid grid-cols-3 gap-y-8 w-4/5  items-center justify-center mx-auto">
        <div v-for="recipe in recipes">
            <Card  :recipe="recipe" :key="recipe.name"/>
        </div>
    </div>

    <div class="bg-cover bg-center h-screen flex items-center justify-center"
        style="background-image: url('/hero-background-2.jpg'); background-size: 150%;">
        <div class="relative bg-cover bg-center h-96 w-9/12"
            style="background-image: url('/hero-background-6.jpg'); background-size: 130%;">
            <div class="absolute w-1/3 left-20 top-28 space-y-6">
                <p class="text-[#20c05c] text-sm font-bold capitalize">check this</p>
                <h2 class="text-5xl font-extrabold text-white">other recipes</h2>
                
            </div>

        </div>

    </div>




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