

const cards = document.querySelector('.cards');
const select = document.querySelector(`select`);
var newCards = `<div class="cards"> `;
var newSelect = `<select class="u-full-width" id="breed" ">`;

const dogImage = `https://dog.ceo/api/breeds/image/random`;
var dogName = " ";
const dogList = `https://dog.ceo/api/breeds/list/all`;
var specificDogImage ="";


function getDogList() {
    // will returned the fetch url information
    return fetch(dogList)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  }



function getRandomDogPhoto(url) {
    // will returned the fetch url information
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  }

  function getDogPhoto() {
    // will returned the fetch url information
    return fetch(dogImage)
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  }


  async function getDogImage(url) {
  const data = await getRandomDogPhoto(url);
  newCards += `<img src=${data.message} onclick="changeImage()">`;
  newCards += `</img>`;
  newCards += `</div>`;
   cards.innerHTML = newCards;
   newCards = `<div class="cards"> `;
  }

  

  async function init() {
      const data = await getDogList();
      var dogList  = Object.keys(data.message);
       
      for (let i = 0; i < dogList.length; i++) {    
        newSelect += `<option value='${dogList[i]}'>${dogList[i]}</option>`;
      }

  newSelect += `</select>`;
  select.innerHTML = newSelect;
    }
  



 async function changeImage()
  {
    const data = await getDogPhoto();
    newCards = " ";
    newCards += `<img src=${data.message} onclick="changeImage()">`;
    newCards += `</img>`;
    newCards += `</div>`;
    cards.innerHTML = "";
     cards.innerHTML = newCards;

  }


function getDogName()
{

    dogName=select.options[select.selectedIndex].value;
    specificDogImage = `https://dog.ceo/api/breed/${dogName}/images/random`;
    getDogImage(specificDogImage);


    
}

  select.addEventListener('change',getDogName);

// ------------------------------------------
//  ADD YOUR FETCH FUNCTIONS & CODE
// ------------------------------------------



// ------------------------------------------
//  ADD YOUR CODE TO REPLACE BELOW WITH THE BREED LIST FROM THE API
// ------------------------------------------
// select.innerHTML = " <option value='Breed 1'>Breed 1</option>" +
//     " <option value='Breed 2'>Breed 2</option>" +
//     "<option value='Breed 3'>Breed 3</option>";

init();