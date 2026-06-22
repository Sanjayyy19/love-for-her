
/* ==========================
   TYPEWRITER EFFECT
========================== */

const introText =
"Hey Beautiful... ❤️\nEvery path I walked...\nEvery dream I dreamed...\nLed me to you ✨";

const typewriter = document.getElementById("typewriter");

let i = 0;

function typeEffect() {

    if(i < introText.length){

        if(introText.charAt(i) === "\n"){
            typewriter.innerHTML += "<br>";
        }else{
            typewriter.innerHTML += introText.charAt(i);
        }

        i++;

        setTimeout(typeEffect,60);
    }
}

typeEffect();

/* ==========================
   LOVE MESSAGES
========================== */

const messages = [

"Every heartbeat of mine whispers your name ❤️",

"Among billions of stars, my universe chose you ✨",

"You are the most beautiful chapter of my life 💕",

"My soul found its home in your smile 🌹",

"If forever exists, I want it with you 💖",

"Your eyes are my favorite destination 🌙",

"You are the reason ordinary days become magical ✨",

"Loving you is my favorite adventure 💕",

"I never believed in destiny until I met you ❤️",

"Every love song suddenly made sense because of you 🎵"

];

const msg = document.getElementById("love-message");

let current = 0;

setInterval(()=>{

    current++;

    if(current >= messages.length){
        current = 0;
    }

    gsap.to(msg,{
        opacity:0,
        duration:.5,
        onComplete:()=>{

            msg.innerHTML = messages[current];

            gsap.to(msg,{
                opacity:1,
                duration:.5
            });

        }
    });

},4000);

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "❤️","💖","💕","💘",
        "💗","💓","💞"
    ];

    heart.innerHTML =
        hearts[Math.floor(
            Math.random()*hearts.length
        )];

    heart.style.left =
        Math.random()*window.innerWidth + "px";

    heart.style.fontSize =
        (20 + Math.random()*50) + "px";

    heart.style.animationDuration =
        (5 + Math.random()*10) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },15000);
}

setInterval(createHeart,200);

/* ==========================
   ROSE PETALS
========================== */

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left =
        Math.random()*window.innerWidth + "px";

    petal.style.animationDuration =
        (5 + Math.random()*7) + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,350);

/* ==========================
   PARTICLES GALAXY
========================== */

tsParticles.load("particles-bg",{

    background:{
        color:"transparent"
    },

    particles:{

        number:{
            value:120
        },

        color:{
            value:[
                "#ffffff",
                "#ff66cc",
                "#ff1493"
            ]
        },

        move:{
            enable:true,
            speed:1
        },

        size:{
            value:{
                min:1,
                max:4
            }
        },

        opacity:{
            value:.8
        },

        links:{
            enable:true,
            distance:150,
            color:"#ff66cc",
            opacity:.2
        }

    }

});

/* ==========================
   FIREWORKS
========================== */

function launchFireworks(){

    confetti({

        particleCount:200,

        spread:120,

        origin:{
            y:0.6
        }

    });

}

setInterval(launchFireworks,7000);

/* ==========================
   MOUSE SPARKLES
========================== */

document.addEventListener(
"mousemove",
(e)=>{

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position="fixed";
    sparkle.style.left=e.clientX+"px";
    sparkle.style.top=e.clientY+"px";

    sparkle.style.pointerEvents="none";
    sparkle.style.fontSize="18px";

    sparkle.style.zIndex="9999";

    document.body.appendChild(sparkle);

    gsap.to(sparkle,{

        y:-40,
        opacity:0,
        duration:1,

        onComplete:()=>{
            sparkle.remove();
        }

    });

});

/* ==========================
   GSAP ENTRANCE
========================== */

gsap.from(".love-title",{

    scale:0,

    opacity:0,

    duration:2,

    ease:"elastic.out(1,0.5)"
});

gsap.from(".heart-wrapper",{

    y:100,

    opacity:0,

    duration:2

});

gsap.from(".message-box",{

    y:50,

    opacity:0,

    duration:2,

    delay:1
});

