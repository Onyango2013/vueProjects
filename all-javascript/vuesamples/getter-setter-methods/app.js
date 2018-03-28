
window.addEventListener('load', function () {
    //set time out using vue
    new Vue({
        el: '#app',

        data: {
            fname: "Edward Snowdown", 
            lname: "Lorrilla"
        	
     },

     methods: {

        changeFullName:function(){
            this.fullName = this.fname + ' ' +  this.lname
            console.log(this.fullName)

        }

     },
       

        computed: {
            fullName:{
                get: function(){
                alert('Assembling the Full name here');
                return this.fname + ' ' + this.lname          

                    },
                set: function(newValue){

                    var parts = newValue.split(' ');
                    this.fName = parts[0]
                    this.lname = parts[parts.length - 1]
                    },

                }
            }
     

        })
  })
            

