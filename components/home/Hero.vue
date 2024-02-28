<template>
    <div class="relative bg-cover bg-center h-screen"
        style="background-image: url('/hero-background-5.jpg'); background-size: 150%;">

        <div class="absolute w-1/3 left-32 top-36 space-y-6">
            <p class="text-[#20c05c] text-sm font-bold">WELCOME</p>
            <h2 class="text-4xl font-extrabold">Easy recipes for any occasion</h2>
            <p class="text-md font-thin">Sed ultrices nisl velit, eu ornare est ullamcorper a. Nunc quis nibh magna. Proin
                risus erat, fringilla vel purus
                sit amet, mattis porta enim. Duis fermentum faucibus est.
            </p>
            <button class="flex gap-x-6 bg-[#20c05c] text-white px-10 py-4">
                <div>
                    About us
                </div>


                <div class="w-6 h-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>

            </button>

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