
window.addEventListener('load', function () {
    //set time out using vue
    new Vue({
        el: '#app',

        data: {
        	movieData: [ 'John Rambo', 'Vue Js', 'Kingo'],
            employees: [
            	{id: 1, name:'Morgan', title: 'Developer'},
             	{id: 2, name:'Kennedy', title: 'Educator'},
              	{id: 3, name:'Miayu', title: 'Developer'},
               	{id: 4, name:'Andy Carol', title: 'Astrologer'},
            ]
     },

     methods: {
     	shuffle: function(){
     		this.employees= this.makeSHuffle(this.employees)

     	},
     	makeSHuffle: function(a) {
		    for (let i = a.length - 1; i > 0; i--) {
		        const j = Math.floor(Math.random() * (i + 1));
		        [a[i], a[j]] = [a[j], a[i]];
		    }
		    return a;
		},
     	addNewPersons: function(){
     		var highestId = Math.max.apply(Math, this.employees.map(function(p){
     			return p.id
     		}))
     		var names =['Billy', 'Michael', 'Steve', 'Peter']
     		var titles =['Developer', 'Educator', 'Developer', 'Astrologer']
     		this.employees.push({
     			id: highestId +1, 
     			name:names[Math.floor(Math.random() * names.length)],

     			title:titles[Math.floor(Math.random() * titles.length)]

     		})

     }

    }

})

})
    

