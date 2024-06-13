

// import { useAuthStore } from '~/stores/auth';

// export default defineNuxtRouteMiddleware((to, from) => {
//   const { navigateTo } = to.meta.context;
//     const authStore = useAuthStore();
//     const token=authStore.token;
//   if (!token) {
//     return navigateTo('/login');
//   }
// })






export default defineNuxtRouteMiddleware((to, from) => {
  // const authStore = useAuthStore();
  const router =useRouter()
  if (process.client) {
    const Token = localStorage.getItem('token') || '';
    console.log('>>>>>>>>>>>>>>>>>>>>', Token);
    if (!Token) {
      router.push({ name: '/login' });
    }

  }
});
