const myNavLarge = document.querySelector(".my-nav-large");
const myNavSmall = document.querySelector(".my-nav-small");
const navButtonLarge = myNavLarge.getElementsByTagName("a");
const navButtonSmall = myNavSmall.getElementsByTagName("a");
const main = document.querySelector("#main");
const gameList = [];


SetGameList();

function SetGameList()
{
    const gameContainer = document.querySelector(".games-list-container");


    GameDetails();

    
    for (let index = 0; index < gameList.length; index++) {
        const gameDiv = document.createElement("div");
        const gameLink = document.createElement("a");
        const gameImg = document.createElement("img");
        const gameParagraph = document.createElement("p");

        gameDiv.setAttribute("class", "game-container");
        gameDiv.setAttribute("style", "min-height:200px;");
        gameLink.setAttribute("href", gameList[index].objectLink);
        gameLink.setAttribute("target", "_blank");
        gameImg.setAttribute("src", gameList[index].objectImage);
        gameParagraph.innerHTML = gameList[index].objectName;

        
        gameDiv.append(gameImg);
        gameDiv.append(gameParagraph);
        gameLink.append(gameDiv);
        gameContainer.append(gameLink);
    }
}

function GameDetails(){
    
    gameList.push(MakeObject("Monsters Dungeon Battle", 
    "https://img.gamemonetize.com/cb4lyqk01r8nugfoqxnaps191l2xvq9f/512x384.jpg", 
    "https://gamemonetize.com/monsters-dungeon-battle-game"
    ));
    
    gameList.push(MakeObject("Cute Animal Rotate Puzzle", 
    "https://img.gamemonetize.com/jbpo01qvo3gsyh2i47h910usntb5c9v6/512x384.jpg", 
    "https://gamemonetize.com/cute-animal-rotate-puzzle-game"
    ));
    gameList.push(MakeObject("Merge Candies", 
    "https://img.gamemonetize.com/uxkhiea6pr6cbr81689stbekjdbcfqay/512x384.jpg", 
    "https://gamemonetize.com/merge-candies-game"
    ));
    
    gameList.push(MakeObject("Ben10 Jigsaw Puzzle", 
    "https://img.gamemonetize.com/qacvml1er153n36mbuowjp9ex0p20fte/512x384.jpg", 
    "https://gamemonetize.com/ben10-jigsaw-puzzle-game"
    ));

    gameList.push(MakeObject("Summer Beach and Girls Puzzle", 
    "https://img.gamemonetize.com/kkw2btotcpyyzsyzqutslo4rvgtvm4k8/512x384.jpg", 
    "https://gamemonetize.com/summer-beach-and-girls-puzzle-game"
    ));
}


function MakeObject(name, imageSource, link)
{
    const object =
    {
        objectName: name,
        objectImage: imageSource,
        objectLink: link
    };

    return object;
}


AddListener();

function AddListener()
{
    for (let index = 0; index < navButtonLarge.length; index++) {
        const largeButton = navButtonLarge[index];
        const smallButton = navButtonSmall[index];


        largeButton.addEventListener("click", () => {
            SelectedButtonLarge(largeButton, index);
            SelectedButtonSmall(smallButton, index);
        });

        smallButton.addEventListener("click", () => {
            SelectedButtonLarge(largeButton, index);
            SelectedButtonSmall(smallButton, index);
        });
    }
}
function SelectedButtonLarge(largeButton, index)
{
    const blackButtons = myNavLarge.querySelectorAll(".w3-black");

    blackButtons.forEach(element => {
        element.classList.remove("w3-black");
    });
    largeButton.classList.add("w3-black");
    ShowSelectedPage(index);
}
function SelectedButtonSmall(smallButton, index)
{
    const smallButtons = myNavSmall.querySelectorAll(".w3-white");

    smallButtons.forEach(element => {
        element.classList.remove("w3-white");
    });
    smallButton.classList.add("w3-white");


    ShowSelectedPage(index);
}
function ShowSelectedPage(selectedIndex)
{
    const mainPages = main.querySelectorAll(".main-page");

    for (let index = 0; index < mainPages.length; index++) {
        mainPages[index].classList.add("hide-page");
        
        if(index === selectedIndex)
            mainPages[index].classList.remove("hide-page");
    }

}


