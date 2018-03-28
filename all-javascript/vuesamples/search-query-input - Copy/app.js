
window.addEventListener('load', function () {
    //set time out using vue
    new Vue({
        el: '#app',

        data: {

            query: "", 
       
            list: [
            	{msg: 'Morgan Lee'},
             	{msg: 'Kennedy Lee'},
              	{msg: 'Man Chik Chiu'},
               	{msg: 'Andy Carol Man'},
                {msg: 'Killimabogo Home'},
                {msg: 'Kennedy John'},
                {msg: 'Peter Kimsumba'}
            ],
            isSearching: false,
            result:[]
     },

     watch: {

        query: function(){

            var vm = this;

            this.isSeaching = true;
            

            setTimeout(function(){

                vm.result = vm.list.filter( function(item){

                    this.isSeaching = true;

                    return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1

                })

            }, 500)

        }

     },



})

})
    

