const { createApp } = Vue

  createApp({
    data() {
      return {
        image: "img/logoboolean.png",
        toDoList: [
            {
                text: 'compiti',
                done: 'false',   
            },
            {
                text: 'cucinare',
                done: 'false',   
            },
            {
                text: 'mangiare',
                done: 'false',   
            }
        ],
        
      } 
    }, methods: {
        removeTask(index) {
            this.toDoList.splice(index, 1)
        }
    },
  }).mount('#app')