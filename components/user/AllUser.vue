<template lang="pug">
div
            div.flex.justify-between.gap-5
                //- h1.text-2xl.text-semibold.p-5  User-{{ users }}
                Nuxt_link(to="add")
                    button.p-5.bg-yellow-700.rounded-xl.m-5 Add User
            div.flex.flex-col
                div.over-flow
                    div.inline-block
                        div.over-flow-hidden
                            table.text-left.text-sm
                                thead.border-b.w-full 
                                    tr
                                        th.px-6.py-4 firstName
                                        th.px-6.py-4 nickname
                                        th.px-6.py-4 birthDate
                                        th.px-6.py-4 email
                                        th.px-6.py-4 age
                                        th.px-6.py-4 gender
                                        th.px-6.py-4 city 
                                tbody
                                    tr
                                    tr(v-for="user in users" :key="user.id")
                                   
                                        td.px-6.py-4 {{ user.firstName }}
                                        td.px-6.py-4 {{ user.nickname }}
                                        td.px-6.py-4 {{ user.birthDate }}
                                        td.px-6.py-4 {{ user.email }}
                                        td.px-6.py-4 {{ user.age }}
                                        td.px-6.py-4 {{ user.gender }}
                                        td.px-6.py-4 {{ user.city }} 
                                            div
                                                Nuxt_link(to="user/update/${user.id}")
                                                    button.p-5.bg-blue.rounded-lg update
                                                Nuxt_link(to="user/delete/${user.id}")
                                                    button.p-5.bg-blue.rounded-lg delete 
</template>

<script setup>
const route= useRoute();
const users = ref([]);



const getAllUsers  = async () => {
  const token = localStorage.getItem('token');
  useGqlToken(`Bearer ${token}`)
  const { data } = await useAsyncGql({
    operation: 'getUsersBoard',
    variables: 
    { filter: { role:"USER" },
      paginate: { page: 1, limit: 15 },
      sortBy: "DATE_JOINED"
    }  
  });

if (data.value.usersBoard.success){
    users.value = data.value.usersBoard.data.items;
    console.log(users.value , "users");
}else {
throw new Error(data.value.usersBoard.message);
}
}
getAllUsers();

</script>

<style lang="scss" scoped>

</style>