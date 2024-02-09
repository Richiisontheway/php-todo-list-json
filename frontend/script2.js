// faccio il destructuring dell'oggetto createApp
const { createApp } = Vue;

// creazione dell'istanza di vue

createApp ({
    data(){
        return {
            tasks:[],
            new_task:[]
        }
    },
    methods: {
        call_api(){
            axios
            .post ('http://localhost/backend%20Boolean/php-todo-list-json/backend/task.php',
            {
                headers:{'Content-type' : 'multipart/form-data'}
            }
            )
            .then((response) => {
                this.tasks = response.data;
                console.log(response)
            })
        },
        //funzione per pushare dentro l'array ciò che scrivo nell'input
        add_new_task() {
            // this.tasks.push({
            //     //chiave & valore voluti da pushare
            //     name: this.new_task,
            //     status: false
            // })
            // this.new_task = '';
            axios
            .post ('http://localhost/backend%20Boolean/php-todo-list-json/backend/newTask.php',
                {
                    name: this.new_task,
                    status: false
                },
                {
                    headers:{'Content-type' : 'multipart/form-data'}
                }
            )
            .then((response) => {
                this.tasks = response.data;
                console.log(response)
            })
        },
        change_status(i){
            this.tasks[i].status = !this.tasks[i].status;
            console.log(this.tasks[i].status)
        }

    },
    created(){
        this.call_api();
    }
        
        
}).mount('#app');