const { createApp } = Vue

  createApp({
    data() {
      return {
        image: "img/logoboolean.png",
        taskText: '',
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
        addTask() {
            let newTask = {
                text: this.taskText,
                done: 'false'
            }
            this.toDoList.unshift(newTask)
        },
        removeTask(index) {
            this.toDoList.splice(index, 1)
        }
    }, 
  }).mount('#app')