

window.addEventListener('load', function () {
    //your script

    new Vue({

	el: '#app',
	data: {
		fname:'Morgan',
		lname : 'Okoth',
		age: 45
	},

	methods: {
		getFullName: function(){
			return this.fname + ' ' + this.lname;
		},
		adult: function(age){
			age = this.age;
			
			if(age > 35)
			{
				return 'an Adult';
			}
			else
			{
				return ' a Child';
			}
		},

		clickButton: function(){
			alert( 'The person is currently' + this.adult());
		}
	}
})
})

