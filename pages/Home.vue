<template>
    <HomeHero />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 my-10 w-4/5  items-center justify-center mx-auto">
        <div v-for="recipe in data.recipe" :key="recipe.name">
            <Card :recipe="recipe" />
        </div>
    </div>
    <HomeAbout />
    <HomeRealAbout />
    <Testimonials />
    <p>{{ }}</p>
</template>

<script setup>
const query = gql`
        query getRecipes{
            recipe{
                name
                desc
                created_by
                likes
                imageUrl
            }   
        }
        `

const { data } = await useAsyncQuery(query)
// This is from the home page
// console.log(data)
console.log(data.value.recipe)
// console.log(data.value.recipe[0].name)
// console.log(data.value.recipe[0].desc)
// console.log(data.value.recipe[0].created_by)
// console.log(data.value.recipe[0].likes)
// console.log(data.value.recipe[0].imageUrl)





// 

</script>