<template>
        <div>

                <div class="relative bg-cover bg-center h-screen"
                        style="background-image: url('/about-background.jpg'); background-size: 150%;">

                        <div class="absolute w-1/3 left-32 top-36 space-y-12 w-1/2">
                                <div class="w-1/3 left-32 top-36 space-y-6 w-4/5">
                                        <p class="text-[#20c05c] text-sm font-bold">MASTER CHEF</p>
                                        <h2 class="text-5xl font-extrabold">A few words about us</h2>
                                </div>
                                <div class="space-y-6">

                                        <h2 class="text-4xl font-extrabold">Chef Murphy</h2>
                                        <p class="text-[#20c05c] text-sm font-bold">MASTER CHEF</p>
                                        <p class="text-md font-thin">
                                                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo cursus,
                                                faucibus
                                                lorem
                                                eget, egestas eros. Maecenas eleifend erat at justo fringilla imperdiet id ac
                                                magna.
                                                Suspendisse
                                                vel facilisis odio, at ornare nibh. In malesuada, tortor eget sodales mollis,
                                                mauris
                                                lectus
                                                hendrerit purus.
                                        </p>
                                </div>
                        </div>
                        <img src="/chef.png" alt="" class="absolute right-10 top-32 w-2/5">
                </div>

                <Testimonials />
                <div class="grid grid-cols-3 items-center px-40">
                        <div class="flex flex-col w-72">
                                <img src="/recipe-1.jpg" alt="" class="w-40 h-40 rounded-full">
                                <h3>Proin bibendum sollicitudin feugiat</h3>
                                <p>
                                        Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante.
                                        Integer
                                        magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim
                                        facilisis, massa
                                </p>
                        </div>

                        <div class="flex flex-col w-72">
                                <img src="/recipe-1.jpg" alt="" class="w-40 h-40 rounded-full">
                                <h3>Proin bibendum sollicitudin feugiat</h3>
                                <p>
                                        Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante.
                                        Integer
                                        magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim
                                        facilisis, massa
                                </p>
                        </div>


                        <div class="flex flex-col w-72">
                                <img src="/recipe-1.jpg" alt="" class="w-40 h-40 rounded-full">
                                <h3>Proin bibendum sollicitudin feugiat</h3>
                                <p>
                                        Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo, vitae molestie ante.
                                        Integer
                                        magna purus, commodo in diam nec, pretium auctor sapien. In pulvinar, ipsum eu dignissim
                                        facilisis, massa
                                </p>
                        </div>
                </div>

        </div>
</template>

<script setup>

</script>