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

items.forEach((element) => {
	let container = document.getElementById('container');
	container.innerHTML += `<div class="item ${element.color}">
							<i class ="${element.family} ${element.prefix}${element.name}"></i>
							<p>${element.name}</p>
							</div>`;
});

// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const animals = items.filter((element) => {
	if (element.type === "animal") {
		return true;
	} 
});

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


const filterBtn = document.getElementById('filter-button');
//dare una variabile a select
filterBtn.addEventListener('click', function(){
	let userChoice = document.getElementById('filter').value;
	if (userChoice === "animals") {
		console.log(animals);
	} else if (userChoice === "vegetables"){
		console.log(vegetables);
	} else if (userChoice === "users"){
		console.log(users);
	} else {
		console.log(animals, vegetables, users);
	}
})

