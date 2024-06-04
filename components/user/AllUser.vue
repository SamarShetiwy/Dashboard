<template lang="pug">
div.shadow-xl.mt-5.bg-gray-200.rounded-xl
    div.flex.justify-between.gap-5
        h1.text-2xl.text-semibold.p-5.ml-5  User-{{  }}
        Nuxt_link(to="add")
            button.px-7.py-3.rounded-full.m-5.bg-white Add User
    div.flex.flex-col.ml-10
        div.over-flow
            div.inline-block
                div.over-flow-hidden
                    table.text-left.text-sm.mt-4
                        thead.border-b.border-gray-100 
                            tr
                                th.py-4.py-4 FirstName
                                th.px-6.py-4 NickName
                                th.px-6.py-4  BirthDate
                                th.px-6.py-4 Email
                                th.px-6.py-4 Age
                                th.px-6.py-4 Gender
                                th.px-6.py-4 Action 
                        tbody
                            tr.border-b.border-gray-100(v-for="user in users" :key="user.id")
                                td.px-6.py-4 {{ user.firstName }}
                                td.px-6.py-4 {{ user.nickname }}
                                td.px-6.py-4 {{ user.birthDate }}
                                td.px-6.py-4 {{ user.email }}
                                td.px-6.py-4 {{ user.age }}
                                td.px-6.py-4 {{ user.gender }}
                                td.px-6.py-4 {{ user.city }} 
                                    div.flex.gap-x-2
                                        Nuxt_link(to="update")
                                            button.px-4.py-2.text-semibold.bg-white.rounded-full update
                                        Nuxt_link(to="#")
                                            button.px-4.py-2.text-semibold.bg-white.rounded-full delete 
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