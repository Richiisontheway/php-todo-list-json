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
            .get ('http://localhost/backend%20Boolean/php-todo-list-json/backend/task.php')
                .then((response) => {
                    console.log(response);
                    this.tasks = response.data;
                    fast = 'ciao'
                    console.log(fast,typeof fast)
                })
        },
        //funzione per pushare dentro l'array ciò che scrivo nell'input
        add_new_task() {
            this.tasks.push({
                //chiave & valore voluti da pushare
                name: this.new_task,
                status: false
            })
            //this.new_task = '';
        }
            
    },
    created(){
        this.call_api();
    },
        
        
}).mount('#app');