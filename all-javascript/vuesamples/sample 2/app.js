

window.addEventListener('load', function () {
    //your script

    new Vue({
    	el: '#app',

    	data: {
    		value: 120,
    		cost: 20,
    	},

    	methods:{
    		increment: function()
    		{
    			if(this.cost < 150)
    			{
    				this.cost +=1
    			}
    		},

    		decrement: function()
    		{
    			if(this.cost > 20)
    			{
    				this.cost -=1
    			}
    		},
    	}


    })
})

