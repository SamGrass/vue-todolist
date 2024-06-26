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
        
    },
  }).mount('#app')