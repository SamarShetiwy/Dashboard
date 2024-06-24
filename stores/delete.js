import { defineStore } from 'pinia';

export const useDeletedUsersStore = defineStore('deletedUsers', {
  state: () => ({
    deletedUsers:reactive[]    
  }),
  actions: {
    addUserToDeleted(userId) {
      if (!this.deletedUsers.includes(userId)) {
        console.log(userId);
        this.deletedUsers.push(userId);
      }
    }
  }
});