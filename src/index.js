let addToy = false;
document.addEventListener("DOMContentLoaded", function() {
  const toyCollection = document.getElementById("toy-collection");

  // Function to fetch toy objects 

  const toyId = 123; // Replace with the actual ID of the toy
  const newLikes = 5; // Replace with the new number of likes
  
  const url = `http://localhost:3000/toys/${toyId}`;
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
  };
  const body = JSON.stringify({ likes: newLikes });
  
  fetch(url, {
    method: 'PATCH',
    headers: headers,
    body: body
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to update toy likes');
    }
    return response.json();
  })
  .then(updatedToyData => {
    // Handle successful response (e.g., update toy likes in DOM)
    console.log('Toy likes updated:', updatedToyData);
  })
  .catch(error => {
    // Handle errors
    console.error('Error updating toy likes:', error);
  });
  







  fetch('http://localhost:3000/toys', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  })
})
.then(response => response.json())
.then(data => {
  console.log('Created toy:', data);
})
.catch(error => {
  console.error('Error creating toy:', error);
});

  function fetchToys() {
      fetch('http://localhost:3000/toys')
          .then(response => response.json())
          .then(data => {
           
              if (Array.isArray(data)) {
                  data.forEach(toy => {
                      const card = document.createElement('div');
                      card.classList.add('card');

                   
                      card.innerHTML = `
                          <h2>${toy.name}</h2>
                          <img src="${toy.image}" alt="${toy.name}">
                          <p>Likes: ${toy.likes}</p>
                      `;

                  
                      toyCollection.appendChild(card);
                  });
              }
          })
          .catch(error => console.error('Error fetching toys:', error));
  }

 
  fetchToys();
});




document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
