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
        taskText: "",
        inputError: false,
        
      } 
    }, methods: {
        addTask() {
            if (this.taskText !== "" && this.taskText.length >= 4) {
                let newTask = {
                    text: this.taskText,
                    done: 'false'
                }
                this.toDoList.unshift(newTask);
                this.inputError = false;
            } else {
                this.inputError = true;
            }
            console.log(this.taskText);
            this.taskText = '';
        },
        removeTask(index) {
            this.toDoList.splice(index, 1)
        }
    }, 
  }).mount('#app')