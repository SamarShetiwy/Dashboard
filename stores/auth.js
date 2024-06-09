import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    setUser(user) {
      this.user = user;
    },
    async login(email, password) {
      try {
        const { data } = await useAsyncGql({
          operation: 'EmailAndPasswordLoginBoard',
          variables: { input: { email, password, device: "DESKTOP" } },
        });

        if (data.value.emailAndPasswordLoginBoard.success) {
          const token = data.value.emailAndPasswordLoginBoard.data.token;
          this.setToken(token);
          return true;
        } else {
          throw new Error(data.value.emailAndPasswordLoginBoard.message);
        }
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },
    logout(){
      this.token = null;
      this.user = null;
      localStorage.removeItem('token');
    }
  },
});
