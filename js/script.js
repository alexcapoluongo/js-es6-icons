const items = [
				{
					name: 'cat',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'crow',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'dog',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'dove',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'dragon',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'horse',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'hippo',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'fish',
					prefix: 'fa-',
					type: 'animal',
					family: 'fas',
					color: 'orange'
				},
				{
					name: 'carrot',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas',
					color: 'green'
				},
				{
					name: 'apple-alt',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas',
					color: 'green'
				},
				{
					name: 'lemon',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas',
					color: 'green'
				},
				{
					name: 'pepper-hot',
					prefix: 'fa-',
					type: 'vegetable',
					family: 'fas',
					color: 'green'
				},
				{
					name: 'user-astronaut',
					prefix: 'fa-',
					type: 'user',
					family: 'fas',
					color: 'blue'
				},
				{
					name: 'user-graduate',
					prefix: 'fa-',
					type: 'user',
					family: 'fas',
					color: 'blue'
				},
				{
					name: 'user-ninja',
					prefix: 'fa-',
					type: 'user',
					family: 'fas',
					color: 'blue'
				},
				{
					name: 'user-secret',
					prefix: 'fa-',
					type: 'user',
					family: 'fas',
					color: 'blue'
				}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

const animals = items.filter((element) => {
	if(element.type === "animal") {
		return true;
	}
})

const vegetables = items.filter((element) => {
	if(element.type === "vegetable") {
		return true;
	}
})

const users = items.filter((element) => {
	if(element.type === "user") {
		return true;
	}
});


items.forEach((element) => {
	let container = document.getElementById('container');	
	container.innerHTML += `<div id= ${element.type} class= "item">
								<div class = "${element.color} ${element.type}">
									<i class ="${element.family} ${element.prefix}${element.name}"></i>
									<p>${element.name}</p>
								</div>
							</div>`
});
						
// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


// //creare un button con add eventlistener

const filterBtn = document.getElementById('filter-button');
//dare una variabile a select

filterBtn.addEventListener('click', function(){
		let userChoice = document.getElementById('filter').value;	
		if (userChoice === "animals") {
			;
		} else if (userChoice === "vegetables"){
			const vegItem = document.getElementById('vegetable');
			vegItem.classList.add('hidden');
		} else if (userChoice === "users"){
			let usersItem = document.getElementById('user');
			usersItem.classList.add('hidden');
		} else {
			console.log(animals, vegetables, users);
		}
})



