new Vue({
    el: "#app",
    data: {
      wishes: [],
      message: "message"
    },
    methods: {
      addWish() {
        this.wishes.push(this.message);
      },
      remove(index) {
        this.wishes.splice(index, 1);
      },
      resetWish() {
        this.wishes = [];
      }
    }
})