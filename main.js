const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".navlist");

hamburger.addEventListener("click" ,() => {
     list.classList.toggle("list-active");
});

const avengers = document.querySelector("#avengers");

avengers.addEventListener("click", () => {
     window.open("https://en.wikipedia.org/wiki/Avengers_(Marvel_Cinematic_Universe)");
});

const mario = document.querySelector("#mario");

mario.addEventListener("click", () => {
     window.open("https://supermarioplay.com/");
});

const explore_mario = document.querySelector("#mario-explore");
explore_mario.addEventListener("click", () =>{
     window.open("https://en.wikipedia.org/wiki/Mario");
});

const valorant = document.querySelector("#valorant");
valorant.addEventListener("click", () => {
     window.open("https://playvalorant.com/en-us/download/");
});

const more_games = document.querySelector("#more-games");
more_games.addEventListener("click", () => {
     window.open("https://www.crazygames.com/");
});

const bike_race = document.querySelector("#bike");
const bike_explore = document.querySelector("#bike-explore");
bike_race.addEventListener("click", () => {
     window.open("https://www.crazygames.com/t/bike");
});

bike_explore.addEventListener("click", () => {
     window.open("https://en.wikipedia.org/wiki/Category:Motorcycle_video_games");
});

const fight_game = document.querySelector("#fight-game");
const fight_game_explore = document.querySelector("#fight_game-explore");

fight_game.addEventListener("click", () => {
     window.open("https://www.crazygames.com/t/fighting");
});

fight_game_explore.addEventListener("click", () => {
     window.open("https://en.wikipedia.org/wiki/List_of_fighting_games");
});

const casino = document.querySelector("#casino");
const casino_explore = document.querySelector("#casino-explore");

casino.addEventListener("click", () => {
     window.open("https://betwaysatta1.com/en/casino");
});

casino_explore.addEventListener("click", () => {
     window.open("https://en.wikipedia.org/wiki/Casino");
});


     //    Adding the details of contact page to google sheet!

 const scriptURL = 'https://script.google.com/macros/s/AKfycbzEEQmRDX-7EbmUvd4Ujr3W24eFM8AeCbZnPXIA2j75yS7MVY30bCfBlwFVIbtp9nIwbQ/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })




  const btn2 = document.querySelector("#submit");
  btn2.addEventListener("click", () => {
    checkPlaceholder();
  });

function checkPlaceholder() {
  let input1 = document.querySelector("#name"); // name 
  let input2 = document.querySelector("#email"); // email
  let input3 = document.querySelector("#msg"); // message

  const name = input1.value.trim();
  const email = input2.value.trim();
  const msg = input3.value.trim();

  if (name !== "" && email !== "" && msg !== "") {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("message",msg);
    
alert("Message sent successfully :)");
      input1.value = "";
      input2.value = "";
      input3.value = "";
    const scriptURL = "https://script.google.com/macros/s/AKfycbwaKRCk3XHLHK4QGanoR4yTKHiDzYD-cGD7dGW6M1nsM1zxuliAy_YCvH7mw1_Ys5P1Rg/exec";
    fetch(scriptURL,{method: 'POST', body: formData})
    .then((response) => {
    })
    .catch((err) => {
      alert('Server Error!, please try again later');
      console.log("Error occurred",err.message);
    })
  } else {
    alert('Please fill all fields!');
  }
}