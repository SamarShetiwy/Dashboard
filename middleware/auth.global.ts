// export default  defineNuxtRouteMiddleware((to, from) => {
//     if (process.client) { 
//     const token = localStorage.getItem('token');
//     if (!token) {
//       return navigateTo('/login');
//     }
//     return;
// }
//   });



import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
  // const authStore = useAuthStore();
  if (process.client) {
    const Token = localStorage.getItem('token') || '';
    console.log('>>>>>>>>>>>>>>>>>>>>', Token);
    // return navigateTo('/login');
  }
});
