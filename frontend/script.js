// faccio il destructuring dell'oggetto createApp
const { createApp } = Vue;

// creazione dell'istanza di vue

createApp ({
    data(){
        return {
            tasks: [],
        }
    },
    methods: {
        call_api(){
            axios
                .get ('http://localhost/backend%20Boolean/php-todo-list-json/backend/task.php')
                .then((response) => {
                    console.log(response);
                    this.tasks = response.data;
                })
            }
        },
        mounted(){
            this.call_api();
        }
}).mount('#app');