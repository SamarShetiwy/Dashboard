// export default defineNuxtRouteMiddleware(async (to, from) => {
//   if (process.client) {
//     console.log('>>>>>>>>>>>>>>.middleware')
//     const userToken = localStorage.getItem('token') || '';
//     console.log('>>>>>>>>>>>>>>.userToken', to.path);
//     if (userToken && to.path.includes('login')){
//       console.log('>>>>>>>>>is auth');
//       return navigateTo('/');
//     }else if(!userToken && !to.path.includes('login')){
//       return navigateTo('/login');
//     }
//   }
// });
export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    console.log('>>>>>>>>>>>>>>.middleware');
    const userToken = localStorage.getItem('token') || '';
    console.log('>>>>>>>>>>>>>>.userToken', to.path);

    if (userToken && to.path.includes('login')) {
      console.log('>>>>>>>>>is auth', userToken);

      const { data: response, error } = await useAsyncGql('me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${userToken}`
        }
      });

      if (error) {
        console.error('GraphQL error:', error);
        localStorage.removeItem('token');
        return navigateTo('/login');
      }

      const userId = response?.me?.data?.id;

      if (userId) {
        return navigateTo('/');
      } else {
        localStorage.removeItem('token');
        return navigateTo('/login');
      }
    } else if (!userToken && !to.path.includes('login')) {
      return navigateTo('/login');
    }
  }
});

