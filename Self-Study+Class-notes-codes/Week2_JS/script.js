// taking out the html tag info using the query selector

var content = document.querySelector('#content');

var header = document.querySelector('h1');

var featured = document.querySelector('.featured');

var title = document.querySelector(`.get-title`);

var info = document.querySelector('p strong');

var paragraph = document.querySelectorAll(`p`);

var divs = document.querySelectorAll(`div`);

var mainHeader = document.querySelector(`h2`);

var sampleHeader = document.querySelector(`h1`);

var appDivElement = document.querySelector("#app")

var VideoOption = document.querySelector(`#Video`);

var videoPlay = document.querySelector(`#Play`);

var videoPause = document.querySelector(`#Pause`);

var videoResume = document.querySelector(`#Resume`);

var videoForward = document.querySelector(`#forward`);

var videoTimeStamp = document.querySelector(`#TimeStamp`);


// console all the information about the html script which is taken from the html tag
console.log(content);
console.log(header);
console.log(featured);
console.log(paragraph);
console.log(divs);


// important loop used for taking specific html
const headers = Array.from(paragraph);
headers.map(header => console.log(header));

// important loop used for taking specific html
const information = Array.from(divs);
information.map(particular => console.log(particular));

// HTML content under the div element
console.log("Inside the the Html element content"+title.innerHTML+"\n");

// Text content inside the div element
console.log("Inside the Tag, the text content\n"+title.innerText);

// updating the Text Inside the title 
title.innerText = "Fuck Off";
console.log("Content is: "+title.innerText);



// Manipulating the HTML css using the script

info.innerHTML = "<i>Cool</i>";   
//info.innerText = "Bill";

// changed the className here
mainHeader.className = `post-title hidden`;
mainHeader.innerText = " changed the Heading ";
console.log(mainHeader);

// add styles to the h1 tag
sampleHeader.classList.add('entry-header');
console.log(sampleHeader);
// remove styles to the h1 tag
//sampleHeader.classList.remove('entry-header');
console.log(sampleHeader);


// add new class name to the header
sampleHeader.className += `main`;
console.log(sampleHeader);


function valueAdder(title)
{
    return `<h1>${title}</h1>`
}


// insert adjacent HTML 
appDivElement.insertAdjacentHTML('beforeend',valueAdder('Hello!'));
console.log(appDivElement);



const htmlStatus = stats => { return  (`<p>${stats}</p>`) };

const htmlInfoGeneral = general => {
    return `
        <article> 
           <p>
               ${general.title}
           </p>
           
           <p>
               ${general.Power}
           </p>
           <p> 
               ${general.Limitation}
           </p>
        </article>
    `;
};

const htmlFooter = foot => {
    return foot;
}




const stats = "My status ";
const infoGeneral = {"title":"King","Power":"Limitless","Limitation":"Not valid"};
const  footer = `<footer>Life is Unfair get used to it</footer>`;

appDivElement.insertAdjacentHTML(`beforeend`,htmlStatus(stats));
appDivElement.insertAdjacentHTML(`beforeend`,htmlInfoGeneral(infoGeneral));
appDivElement.insertAdjacentHTML(`beforeend`,htmlFooter(footer));

console.log(appDivElement);

// Video Working
VideoOption.addEventListener('videoTimeStamp',updateTimestamp);
videoPlay.addEventListener("click",playVideo);
videoPause.addEventListener("click",pauseVideo);
videoResume.addEventListener("click",resumeVideo);  
videoForward.addEventListener("click",forwardVideo);


function playVideo()
{
   
    VideoOption.play();
}    

function pauseVideo()
{
    console.log("present Here Too");
   VideoOption.pause();

}

function resumeVideo()
{
  VideoOption.currentTime = 0;
}

function forwardVideo()
{
   VideoOption.currentTime+=10;


}

function updateTimestamp()
{
    console.log("Atleast here");
    timestamp.innerHTML = parseInt(VideoOption.currentTime);
}

