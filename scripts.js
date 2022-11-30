
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    // aquí tenemos la información de la API
    console.log(data);
    // ahora puedes agregar la información a tu página web
  });

  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
      // aquí tenemos la información de la API
      console.log(data);
      
      // obtener el elemento donde se cargará la información
      const characterList = document.getElementById('characterList');
      
      // iterar sobre la información de la API
      data.results.forEach(character => {
          // crear elementos de HTML
          const card = document.createElement('div');
          const alert = document.createElement('div');
          const characterImage = document.createElement('img');
          const characterName = document.createElement('h2');
          const characterLastLocation = document.createElement('p');
          const characterButton = document.createElement('button');
          characterButton.classList.add('characterButton');
          characterButton.style.position = 'absolute';
          characterButton.style.bottom = '-40px';
          characterButton.style.right = '0px';
          
          // agregar estilos al elemento
          card.classList.add('card');
          card.style.position='relative';
          alert.classList.add('alert');
          alert.style.position='absolute';
          alert.style.top='10px';
          alert.style.left ='10px';

          // agregar información de la API al elemento
          characterImage.src = character.image;
          alert.innerText = character.status;
          if (character.status === 'Alive') {
              alert.classList.add('alert-success');
          } else if (character.status === 'Unknown') {
              alert.classList.add('alert-warning');
          } else {
              alert.classList.add('alert-danger');
          }
          characterName.innerText = character.name;
          characterLastLocation.innerText = `Última ubicación: ${character.location.name}`;
          characterButton.innerText = "Más información";
          characterButton.addEventListener('click', () => {
              // window.location.href = `characters.html?id=${character.id}`;
              window.open(`characters.html?id=${character.id}`);
          });

          // agregar los elementos al DOM
          card.appendChild(alert);
          card.appendChild(characterImage);
          card.appendChild(characterName);
          card.appendChild(characterLastLocation);
          card.appendChild(characterButton);
          characterList.appendChild(card);

          // agregar animación a la tarjeta
          card.addEventListener('mouseover', () => {
                    card.style.transform = 'scale(1.1)';
                });
                card.addEventListener('mouseout', () => {
                    card.style.transform = 'scale(1)';
                });
            });
        });

  
          // obtener el ID del personaje desde la URL
          const characterID = window.location.search.split('=')[1];

          fetch(`https://rickandmortyapi.com/api/character/${characterID}`)
          .then(response => response.json())
          .then(data => {
              // aquí tenemos la información de la API
              console.log(data);
              
              // obtener los elementos del DOM
              const characterName = document.getElementById('characterName');
              const characterStatus = document.getElementById('characterStatus');
              const characterSpecies = document.getElementById('characterSpecies');
              const characterGender = document.getElementById('characterGender');
              const characterImage = document.getElementById('characterImage');
  
              // agregar información de la API
              characterName.innerText = data.name;
              characterStatus.innerText = `Estado: ${data.status}`;
              characterSpecies.innerText = `Especie: ${data.species}`;
              characterGender.innerText = `Genero: ${data.gender}`;
              characterImage.src = data.image;
          });