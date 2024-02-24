<template>
    <Hero />
    <Testimonials />
    <p>{{  }}</p>




</template>

<script setup>
    const query = gql`
        query getUsers{
            users{
                username
                firstname
                lastname
                about
            }
        }
    `

    // const variables = { limit: 5 }
    // const { data } = await useAsyncQuery(query)
    // console.log(data._value.users)
    // console.log(data._value.users[0].firstname)
    // console.log(data._value.users[0].lastname)
    // console.log(data._value.users[0].about)
    // console.log(data._value.users[0].username)
    // console.log("ji")

</script>