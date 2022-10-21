const {createApp} = Vue
createApp({
    data(){
        return{
            search:' ',
            searchSubmit:'',
            searchResult:''
          }
    },
    methods:{
        showAlert(){
            return alert("Press okay if ur mum gay")
        },
          onSubmit(){
            this.searchResult = this.searchSubmit
          }
    }
}).mount('#assignment');