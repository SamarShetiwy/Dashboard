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
    const userToken = localStorage.getItem('token') || '';
    console.log('>>>>>>>>>>>>>>.path', to.path);
    console.log('>>>>>>>>>>>>>>.userToken',userToken);

    if (userToken && to.path.includes('login')) {

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
      const tokenGraph = response?.value.me?.data?.token;
      const role = response?.value.me?.data?.role
      console.log('graphToken:', tokenGraph);

      if (tokenGraph !==userToken && role !== 'USER') {
        console.log( 'Tokens not match',tokenGraph);
        localStorage.removeItem('token');
        return navigateTo('/login');
      } else {
        return navigateTo('/');
      }
    } else if (!userToken && !to.path.includes('login')) {
      return navigateTo('/login');
    }
  }
});





