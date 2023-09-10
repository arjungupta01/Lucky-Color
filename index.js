const Zodiac=document.getElementById("zodiac");
const body=document.body;

const changeBackground=() => {

    switch(Zodiac.value){
        case "aries":
            body.style.backgroundColor="#fc0303";
            break;
         case "tarus":
            body.style.backgroundColor="#FFE5E5";
            break;
        case "gemini":
            body.style.backgroundColor="#fce514";
            break;
        case "cancer":
            body.style.backgroundColor="#DFCCFB";
            break;
        case "leo":
            body.style.backgroundColor="#FAF0E6";
            break;
        case "virgo":
            body.style.backgroundColor="#61677A";
            break;
        case "scorpio":
            body.style.backgroundColor="#352F44";
            break;      
        case "saggitarius":
            body.style.backgroundColor="#994ead";
            break;
        case "aquarius":
            body.style.backgroundColor="#579eeb";
            break;
        case "capricorn":
            body.style.backgroundColor="#eb8d57";
            break;    
        case "pisces":
            body.style.backgroundColor="#fc88d8";
            break;      
        default:
            body.style.backgroundColor="#fff";
        break;            
    }
};