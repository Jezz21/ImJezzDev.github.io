const publishedGamesList = [];
const prototypeGamesList = [];


PublishedGamesDetails();
PrototypeGamesDetails();
SetGameList(".games-list-container", publishedGamesList);
SetGameList(".prototype-list-container", prototypeGamesList);

const gameContainerClass = document.querySelectorAll(".game-container");

gameContainerClass.forEach(element => {
    element.classList.toggle("game-container-anim");
});

function SetGameList(tag, list)
{
    const gameContainer = document.querySelector(tag);
    
    let animationDelay = 0;
    let animationDelayInterval = 0.15;

    for (let index = 0; index < list.length; index++) {
        const gameDiv = document.createElement("div");
        const gameLink = document.createElement("a");
        const gameImg = document.createElement("img");
        const gameParagraph = document.createElement("p");

        gameDiv.setAttribute("class", "game-container");
        gameDiv.setAttribute("style", "animation-delay:" + animationDelay + "s;");
        gameDiv.setAttribute("style", "-webkit-animation-delay:" + animationDelay + "s;");
        gameLink.setAttribute("href", list[index].objectLink);
        gameLink.setAttribute("target", "_blank");
        gameImg.setAttribute("src", list[index].objectImage);
        gameImg.setAttribute("alt", "");
        gameParagraph.innerHTML = list[index].objectName;

        
        gameDiv.append(gameImg);
        gameDiv.append(gameParagraph);
        gameLink.append(gameDiv);
        gameContainer.append(gameLink);

        animationDelay += animationDelayInterval;
    }
}

function PrototypeGamesDetails()
{
    prototypeGamesList.push(MakeObject("Battle Tower RPG Prototype", 
    "https://img.itch.zone/aW1nLzEyNzcwMDgwLnBuZw==/315x250%23c/9RRZLD.png", 
    "https://jac-games.itch.io/first-rpg-prototype"
    ));
    prototypeGamesList.push(MakeObject("2D turn-based RPG", 
    "Images/NO_IMAGE.jpg", 
    "https://jac-games.itch.io/2d-turn-based-rpg-prototype"
    ));
    
}

function PublishedGamesDetails(){
    
    publishedGamesList.push(MakeObject("Monsters Dungeon Battle", 
    "https://img.gamemonetize.com/cb4lyqk01r8nugfoqxnaps191l2xvq9f/512x384.jpg", 
    "https://gamemonetize.com/monsters-dungeon-battle-game"
    ));
    
    publishedGamesList.push(MakeObject("Cute Animal Rotate Puzzle", 
    "https://img.gamemonetize.com/jbpo01qvo3gsyh2i47h910usntb5c9v6/512x384.jpg", 
    "https://gamemonetize.com/cute-animal-rotate-puzzle-game"
    ));
    publishedGamesList.push(MakeObject("Merge Candies", 
    "https://img.gamemonetize.com/uxkhiea6pr6cbr81689stbekjdbcfqay/512x384.jpg", 
    "https://gamemonetize.com/merge-candies-game"
    ));
    
    publishedGamesList.push(MakeObject("Ben10 Jigsaw Puzzle", 
    "https://img.gamemonetize.com/qacvml1er153n36mbuowjp9ex0p20fte/512x384.jpg", 
    "https://gamemonetize.com/ben10-jigsaw-puzzle-game"
    ));

    publishedGamesList.push(MakeObject("Summer Beach and Girls Puzzle", 
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

