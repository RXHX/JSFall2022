
var search = document.querySelector(`.search-container`);
var gallery = document.querySelector(`#gallery`);

var newGallery = ` `;
var newSearch = ` `;




async function newSearch()
{




}



async function galleryMaking()
{
   
    newGallery += `<div id="gallery" class="gallery">`;

    for(var i=0;i<12;i++)
    {
        await fetch('https://randomuser.me/api/')
        .then((response)=>response.json())
        .then((data) => {
           const imageUrl = data.results[0].picture.thumbnail;
           const email = data.results[0].email;
           const  firstName = data.results[0].name.first;
           const secondName = data.results[0].name.last;
           const fullName = firstName+secondName;
           const city = data.results[0].location.city;
           const state =data.results[0].location.state;
           const location = city+","+state;

           // img, name, email, city, (555) 555-5555, 123 Portland Ave., Portland, OR 97204,Birthday: 10/21/2015
         
           
            newGallery +=  `
            
            <div class="card">
                <div class="card-img-container">
                    <img class="card-img" src=${imageUrl} alt="profile picture" onclick="makeModal('${imageUrl}','${fullName}','${email}','${city}')">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap" onclick="makeModal('${imageUrl}','${fullName}','${email}','${city}')">${fullName}</h3>
                    <p class="card-text">${email}</p>
                    <p class="card-text cap">${location}</p>
                </div>
            </div>                 
        `;
        }); 
    }
        

      newGallery += `</div>`;
      gallery.innerHTML = newGallery;

    }
  
         



   

async function makeModal(a,b,c,d)
{






}

  galleryMaking();



