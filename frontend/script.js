// // faccio il destructuring dell'oggetto createApp
// const { createApp } = Vue;

// // creazione dell'istanza di vue

// createApp ({
//     data(){
//         return {
//             tasks: [],
//             //new_task: []
//         }
//     },
//     methods: {
//         call_api(){
//             axios
//                 .get ('http://localhost/backend%20Boolean/php-todo-list-json/backend/task.php')
//                 .then((response) => {
//                     console.log(response);
//                     this.tasks = response.data;
//                 })
//             },
//             newc(){
//                 fast = 'ciao'
//                 console.log(fast,typeof fast)
//                 //console.log(this.new_task)
//             },
//         },
//         mounted(){
//             // this.call_api();
//             // this.newc()
//         },
// }).mount('#app');
