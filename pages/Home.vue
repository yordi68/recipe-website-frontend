<template>
    <Hero />
    <Testimonials />
    <p>{{ }}</p>
    <!-- <div class="grid grid-cols-1 md:grid-cols-3 gap-y-8 my-10 w-4/5  items-center justify-center mx-auto">
        <div v-for="rec in data._value.recipe" :key="rec.name">
            <Card :recipe="rec" />
        </div>
    </div> -->
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
// console.log(data._value.recipe)
console.log(data._value.recipe[0].name)
console.log(data._value.recipe[0].desc)
console.log(data._value.recipe[0].created_by)
console.log(data._value.recipe[0].likes)
console.log(data._value.recipe[0].imageUrl)





// 

</script>