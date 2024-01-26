const home = document.querySelector("#home");
const mainPage = home.querySelector(".main-page");

const loadingLetters = ["L", "O", "A", "D", "I", "N", "G"];


let counter = 0;

loadingLetters.forEach(element => {
    //mainPage.innerHTML += "<h1 class = 'loading'>" + element + "</h1>";
    const loadText = document.createElement("h1");
    loadText.setAttribute("class", "loading");
    loadText.setAttribute("style", "animation-delay:" + counter + "s;");
    loadText.setAttribute("style", "-webkit-animation-delay:" + counter + "s;");
    
    loadText.innerHTML += element;
    mainPage.append(loadText);

    counter += 0.4;
});



