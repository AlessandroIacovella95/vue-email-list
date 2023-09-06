const { createApp } = Vue

createApp({
  data() {
    return {
        emails:[],
    }
  },

methods:{
    generateEmail(){
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) =>{
                const randomEmail = response.data.response;
                this.emails.push(randomEmail)
            }) 
        }
    }
},

mounted(){
    this.generateEmail()
}

}).mount('#app')