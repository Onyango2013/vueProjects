
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

        query: function(query){

            var vm = this;

            this.isSeaching = true;
        
            vm.setQuery(query)
        }

     },

     methods: {
      setQuery:_.debounce(function(query){

        var vm = this;

        if(!query)
        {
          this.isSeaching = false;
          this.result = [];
        }

        if(query)
        {
          vm.isSeaching - false 
          vm.result = vm.list.filter(function(item){
            return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
          })
        }
      }, 500)
     }



})

})
    

