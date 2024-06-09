<template lang="pug">
div.shadow-xl.mt-7.bg-gray-200.rounded-xl.container 
    div.flex.justify-between.gap-5
        h1.text-2xl.font-semibold.p-5.ml-5  User-{{  }}
        Nuxt_link(to="add")
            button.px-7.py-3.rounded-full.m-5.bg-white Add User
    div.flex.flex-col.ml-10
        div
            div
                div.overflow-scroll
                    table.text-left.text-sm.mt-4.h-screen.w-full.min-w-max.over-flow-hidden.lg-overflow-scroll
                        thead.border-b.border-gray-100 
                            tr
                                th.position-sticky.top-0.px-4.py-4 FirstName
                                th.position-sticky.top-0.px-6.py-4 NickName
                                th.position-sticky.top-0.px-6.py-4  BirthDate
                                th.position-sticky.top-0.px-6.py-4 Email
                                th.position-sticky.top-0.px-6.py-4 Age
                                th.position-sticky.top-0.px-6.py-4 Gender
                                th.position-sticky.top-0.px-6.py-4.w-20 Action 
                        tbody
                            tr.border-b.border-gray-100(v-for="user in users" :key="user.id")
                                td.px-2.py-4 {{ user?.firstName }}
                                td.px-2.py-4 {{ user?.nickname }}
                                td.px-2.py-4 {{ formatDate(user?.birthDate) }}
                                td.px-2.py-4 {{ user?.email }}
                                td.px-2.py-4 {{ user?.age }}
                                td.px-2.py-4 {{ user?.gender }}
                                td.px-2.py-4 {{ user?.city }} 
                                    div.flex.gap-x-2
                                        button( @click="showPopup(user)" ).px-4.py-2.font-semibold.bg-white.rounded-full Update
                                        button.px-4.py-2.font-semibold.bg-white.rounded-full(@click="deleteUser(user.id)") delete
    
    
    Popup(:show="isPopupVisible" @update:show="isPopupVisible = $event")
      userUpdate(:data="singleUser")

</template>

<script setup>


const route= useRoute();
const users = ref([]);

const formatDate = (date) => {
  return useDateFormat(date)
}

const isPopupVisible = ref(false);
const singleUser = ref();
const showPopup = (user) => {
  isPopupVisible.value = true;
  singleUser.value = user;
}


const getAllUsers  = async () => {
  const token = localStorage.getItem('token');
  useGqlToken(`Bearer ${token}`)
  const { data } = await useAsyncGql({
    operation: 'getUsersBoard',
    variables: 
    { 
      filter: { role:"USER" },
      paginate: { page: 1, limit: 10 },
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


const deleteUser = (id) => {
  users.value = users.value.filter(user => user.id !== id);};


</script>

<style lang="scss" scoped>

// .sticky {
//     position: sticky;
//     top: 0;
// }

</style>