//lavEtRandomTal
function lavEtRandomTal(max){
    return Math.floor(Math.random()*max)+1;
}


//point
let point = 0;
let liv = 3;
let mitRandom;

//Julekugle

window.addEventListener("load", sidenVises);
//Skal ændres til sidenVises
//startSpil



//Const
//God - 1
const hel_C = document.querySelector("#hel_kugle_container");
const hel_S = document.querySelector("#hel_kugle_sprite");

//God - 2
const hel_C_2 = document.querySelector("#hel_kugle_container_2");
const hel_S_2 = document.querySelector("#hel_kugle_sprite_2");

//God - 3
const hel_C_3 = document.querySelector("#hel_kugle_container_3");
const hel_S_3 = document.querySelector("#hel_kugle_sprite_3");

//Dårlig 1
const knust_C = document.querySelector("#knust_kugle_container");
const knust_S = document.querySelector("#knust_kugle_sprite");

//Dårlig - 2
const knust_C_2 = document.querySelector("#knust_kugle_container_2");
const knust_S_2 = document.querySelector("#knust_kugle_sprite_2");

//Skærme
const startScreen = document.querySelector("#start");
const levelCompleteSreen = document.querySelector("#level_complete");
const GameOverScreen = document.querySelector("#game_over");
const information = document.querySelector("#information");

//Knapper
const startKnap = document.querySelector("#start_knap");
const informationKnap = document.querySelector("#information_knap");
const genstart1 = document.querySelector("#genstart1");
const genstart11 = document.querySelector("#genstart11");
const genstart2 = document.querySelector("#genstart2");
const genstart22 = document.querySelector("#genstart22");
const genstart33 = document.querySelector("#genstart33");

//Point + liv
const scoreBoardTal = document.querySelector("#score_board_tal");
const lifeBoardTal = document.querySelector("#life_board_tal");

//Timer
const roed = document.querySelector("#roed");

//Lyd
const soundGood = document.querySelector("#sound_good");
const soundBad = document.querySelector("#sound_bad");










function sidenVises() {
  console.log("sidenVises");

  //Skjul andre elementer
  GameOverScreen.classList.add("hide");
  levelCompleteSreen.classList.add("hide");
  information.classList.add("hide");

  //Vis start skærm
  startScreen.classList.remove("hide");
  
  //Klik på start_knap
  startKnap.addEventListener("mousedown", startSpil);

  //Klik på informations knap
  informationKnap.addEventListener("click", informationVises);

}

function startSpil(){
    console.log("startSpil");
//skjul andre skærme
startScreen.classList.add("hide");
//startKnap.classList.add("hide");
GameOverScreen.classList.add("hide");
levelCompleteSreen.classList.add("hide");

//nulstil point og liv
point=0;
liv=3;

//skriv point og liv ud
scoreBoardTal.textContent = point;
lifeBoardTal.textContent = liv;

//start timer -animation
// document.querySelector("#roed").offsetLeft;
roed.classList.add("timer");
roed.addEventListener("animationend", stopSpillet);

//random position og random delay
//mitRandom = Math.floor(Math.random()*5)+1;
hel_C.classList.add("pos" + lavEtRandomTal(9))
hel_C_2.classList.add("pos" + lavEtRandomTal(9))
hel_C_3.classList.add("pos" + lavEtRandomTal(9))
hel_C.classList.add("delay" + lavEtRandomTal(3))
hel_C_2.classList.add("delay" + lavEtRandomTal(3))
hel_C_3.classList.add("delay" + lavEtRandomTal(3))
//mitRandom = Math.floor(Math.random()*5)+1;
knust_C.classList.add("pos" + lavEtRandomTal(9))
knust_C_2.classList.add("pos" + lavEtRandomTal(9))
knust_C.classList.add("delay" + lavEtRandomTal(3))
knust_C_2.classList.add("delay" + lavEtRandomTal(3))
//mitRandom = Math.floor(Math.random()*5)+1;
hel_C.classList.add("speed" + lavEtRandomTal(6))
hel_C_2.classList.add("speed" + lavEtRandomTal(6))
hel_C_3.classList.add("speed" + lavEtRandomTal(6))
//mitRandom = Math.floor(Math.random()*5)+1;
knust_C.classList.add("speed" + lavEtRandomTal(6))
knust_C_2.classList.add("speed" + lavEtRandomTal(6))

//start fald -animationer på elementer
hel_C.classList.add("fald");
hel_C_2.classList.add("fald");
hel_C_3.classList.add("fald");
knust_C.classList.add("fald");
knust_C_2.classList.add("fald");

//Klik
hel_C.addEventListener("click", clickHelKugle);
hel_C_2.addEventListener("click", clickHelKugle);
hel_C_3.addEventListener("click", clickHelKugle);
knust_C.addEventListener("click", clickKnustlKugle);
knust_C_2.addEventListener("click", clickKnustlKugle);


  //Lyt efter op_ned-animationer er er kørt en gang
  hel_C.addEventListener("animationiteration", helKugleReset);
  hel_C_2.addEventListener("animationiteration", helKugleReset);
  hel_C_3.addEventListener("animationiteration", helKugleReset);
  knust_C.addEventListener("animationiteration", knustKugleReset);
  knust_C_2.addEventListener("animationiteration", knustKugleReset);
}

function informationVises(){
    console.log("informationVises");
//skjul andre skærme
startScreen.classList.add("hide");
//startKnap.classList.add("hide");

information.classList.remove("hide");
genstart33.addEventListener("click", sidenVises);
}

function clickHelKugle() {
    console.log("clickHelKugle");

    //få 1 point
    //Mangler - er det det samme som ovenstående?

    //Skriv point ud
    point++;
    scoreBoardTal.textContent = point

    //afspil lyd
    soundGood.volume = 0.4;
    soundGood.currentTime = 0;
    soundGood.play();

    //Start frys
    this.classList.add("frys");

    //start drej_forsvind_hel
    this.firstElementChild.classList.add("drej_forsvind_hel");

    this.removeEventListener("click", clickHelKugle);
    this.addEventListener("animationend", helKugleReset);
  }


  function helKugleReset() {
    console.log("helKugleReset");

    //Vis element igen
    //Mangler forstår ikke


    this.classList="";
    this.firstElementChild.classList="";
    this.offsetLeft;

    //ny random pos og speed
    //mitRandom = Math.floor(Math.random()*5)+1;
    this.classList.add("pos" + lavEtRandomTal(9))
    //mitRandom = Math.floor(Math.random()*5)+1;
    this.classList.add("speed" + lavEtRandomTal(6))

    //Fald
    this.classList.add("fald");


    this.addEventListener("click", clickHelKugle);
  } 

function clickKnustlKugle() {
    console.log("clickKnustlKugle");

    //Mist et liv
    //Mangler - hvad er forskellen på nedenstående og denne

    //Vis antal liv
    liv--;
    lifeBoardTal.textContent = liv;

    //afspil lyd
    soundBad.volume = 0.4;
    soundBad.currentTime = 0;
    soundBad.play();
    
    // start frys
    this.classList.add("frys");

    //Start drej_forsvind_knust
    this.firstElementChild.classList.add("drej_forsvind_knust");


    this.removeEventListener("click", clickKnustlKugle);
    this.addEventListener("animationend", knustKugleReset);

    //liv og point
    if(liv <= 0){
        stopSpillet();
      }
  }


  function knustKugleReset() {
    console.log("knustKugleReset");

    //Vis element igen
    //Mangler


    this.classList="";
    this.firstElementChild.classList="";
    this.offsetLeft;

   //Ny random pos og speed
    //mitRandom = Math.floor(Math.random()*5)+1;
    this.classList.add("pos" + lavEtRandomTal(9))
    //mitRandom = Math.floor(Math.random()*5)+1;
    this.classList.add("speed" + lavEtRandomTal(6))

    //Genstart fald
    this.classList.add("fald");


    this.addEventListener("click", clickKnustlKugle);
  } 

  function stopSpillet() {
    console.log("stopSpillet");
    //fjern alle animationer
    hel_C.classList="";
    hel_C.firstElementChild.classList="";

    hel_C_2.classList="";
    hel_C_2.firstElementChild.classList="";

    hel_C_3.classList="";
    hel_C_3.firstElementChild.classList="";

    knust_C.classList="";
    knust_C.firstElementChild.classList="";

    knust_C_2.classList="";
    knust_C_2.firstElementChild.classList="";
  
    roed.classList.remove("timer");

  
    //Fjern alle eventlisner
    hel_C.removeEventListener("click",startSpil);
    hel_C_2.removeEventListener("click",startSpil);
    hel_C_3.removeEventListener("click",startSpil);
    knust_C.removeEventListener("click",startSpil);
    knust_C_2.removeEventListener("click",startSpil);

    hel_C.removeEventListener("animationiteration",helKugleReset);
    hel_C_2.removeEventListener("animationiteration",helKugleReset);
    hel_C_3.removeEventListener("animationiteration",helKugleReset);
    knust_C.removeEventListener("animationiteration",helKugleReset);
    knust_C_2.removeEventListener("animationiteration",helKugleReset);
  
      //liv og point
  if(liv <= 0){
    gameover();
  }
  else if(point >= 15){
    levelComplete();
  }
  else {
    gameover();
  }
  }


  //Tabt
      function gameover() {
        console.log("GAMEOVER loser");
      
        //Vis gameover skærm
        GameOverScreen.classList.remove("hide");
        //document.querySelector("#game_over_points").textContent = "Du tabte og fik " + point + " point";
      
        //Klik på genstart1
        genstart1.addEventListener("click", startSpil);
        genstart11.addEventListener("click", sidenVises);
      }
      
 //Vundet
      function levelComplete() {
        console.log("Hurra du vandt for helvede");
      
        //Vis levelComplete skærm
        levelCompleteSreen.classList.remove("hide");
        //document.querySelector("#level_complete_points").textContent = "Du vandt og fik " + point + " point";
      
      
        //Klik på genstart2
        genstart2.addEventListener("click", startSpil);
        genstart22.addEventListener("click", sidenVises);
      }

 