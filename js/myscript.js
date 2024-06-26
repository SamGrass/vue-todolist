const { createApp } = Vue

  createApp({
    data() {
      return {
            image: "img/logoboolean.png",
            toDoList: [
                {
                    text: 'compiti',
                    done: false,   
                }
            ]
      }
    }
  }).mount('#app')