<template lang="pug">
div.shadow-lg.mt-5.rounded-xl.container
        div.flex.justify-between
            h1.text-2xl.font-semibold.p-5.ml-5(class="text-[#312e81]")  User-{{  }}
            Nuxt_link(to="add")
                button.px-7.py-3.rounded-full.m-5.text-white(class="bg-[#312e81]") Add User
        div.flex.flex-col.mx-4.mb-4(class="bg-[#eef2ff] w-100 rounded-3xl shadow-xl")
            div.overflow-scroll
                table.text-left.text-sm.font-semibold.mt-4.h-screen.w-full.min-w-max.over-flow-hidden.lg-overflow-scroll.ml-3
                    thead(class="text-[#312e81] border-b border-[#312e81]") 
                        tr
                            th.position-sticky.top-0.px-2.py-4 FirstName
                            th.position-sticky.top-0.px-2.py-4 NickName
                            th.position-sticky.top-0.px-2.py-4  BirthDate
                            th.position-sticky.top-0.px-2.py-4 Email
                            th.position-sticky.top-0.px-2.py-4 Age
                            th.position-sticky.top-0.px-2.py-4 Gender
                            th.position-sticky.top-0.px-2.py-4.w-20 Action 
                    tbody(class="text-[#6366f1]") 
                        tr.border-b( class=" border-[#9492c0] " :id="'user-row-' + user.id" v-for="user in users" :key="user.id")
                            td.px-2.py-4 {{ user?.firstName }}
                            td.px-2.py-4 {{ user?.enLastName }}
                            td.px-2.py-4 {{ formatDate(user?.birthDate) }}
                            td.px-2.py-4 {{ user?.email }}
                            td.px-2.py-4 {{ user?.age }}
                            td.px-2.py-4 {{ user?.gender }}
                            td.px-2.py-4 {{ user?.city }} 
                                div.flex.gap-x-2
                                    button( class="text-[#312e81] " :data="singleUser" @addSuccessful="handleAddSuccessful" @click="showPopup(user)" ).px-4.py-2.font-semibold.bg-white.rounded-full Update
                                    button.px-4.py-2.font-semibold.bg-white.rounded-full(class="text-[#312e81]" @click="deleteUser(user?.id)") delete
                                    
        Popup(:show="isPopupVisible" @update:show="isPopupVisible = $event" :data="singleUser" @updateSuccessful="getAllUsers")
    
    
    
</template>
    
    <script setup>
    // import { useDeletedUsersStore } from '~/stores/delete';
    import { useToast } from 'vue-toast-notification';
    
    const toast = useToast();
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
    
    onMounted(async() => {
      const token = localStorage.getItem('token');
      useGqlToken(`Bearer ${token}`)
      await getAllUsers();
    })
    async function getAllUsers() {
      const { data } = await useAsyncGql({
        operation: 'getUsersBoard',
        variables: 
        { 
          filter: { role:"USER" },
          paginate: { page: 1, limit: 50},
          sortBy: "DATE_JOINED"
        }  
      });
      users.value = data.value?.usersBoard.data.items;
    
    }
    async function deleteUser(userId) {
    // const store = useDeletedUsersStore();
    const { data: response } = await useAsyncGql('deleteUserBoard', { userId });
    console.log(response);
    if (response.value.deleteUserBoard.success) {
        // store.addUserToDeleted(userId);
        toast.success(response.value.deleteUserBoard.message, { duration: 5000, position: 'top-right' });
        document.getElementById(`user-row-${userId}`).classList.add('deleted');
        localStorage.setItem(`user-row-${userId}`, 'deleted');
    } else {
        toast.error(response.value.deleteUserBoard.message, { duration: 5000, position: 'top-right' });
    }
}

// onMounted(() => {
//   const store = useDeletedUsersStore();
//   const deletedUsers = store.deletedUsers;
//   deletedUsers.forEach(userId => {
//     document.getElementById(`user-row-${userId}`).classList.add('deleted');
//   });
// });
    // const deleteUser = (id) => {
    //   users.value = users.value.filter(user => user.id !== id);};
    
    
    </script>
    
    <style lang="scss" scoped>
    
    .deleted  {

      background-color:#312e81; 
}
    
    </style>