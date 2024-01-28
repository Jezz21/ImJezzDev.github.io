const home = document.querySelector("#home");
const enemyContainer = document.querySelector(".enemy-container");
const skillContainer = document.createElement("div");
const enemyHpText = enemyContainer.querySelector("p");
const enemyImage = home.querySelector("img");
const block = home.querySelector(".blocker");
const restartButton = block.querySelector(".restart-button");

restartButton.classList.add("user-select-none");

let currentHp;
let maxHp = 100;
currentHp = maxHp;
const numberOfButtons = 3;
const attack = [
    ()=>{
        currentHp -= 1;
        UpdateHP();
    },
    () => {
        currentHp -= 10;
        UpdateHP();
    },
    () =>{
        currentHp -= 30;
        UpdateHP();
    }
];

SetEnemyImage();
MakeAttackButtons();



function SetEnemyImage(){
    enemyImage.classList.add("enemy-image");
    enemyImage.classList.toggle("enemy-idle");    
}
function MakeAttackButtons(){
    
    for (let index = 0; index < numberOfButtons; index++) {
        
        const skillButton = document.createElement("button");
        skillButton.classList.add("my-button");
        
        skillButton.innerHTML = "ATTACK " + (index + 1);
        skillButton.style.margin = "5px";
        skillButton.classList.add("user-select-none");

        
        skillButton.onclick = () => {
            enemyImage.classList.toggle("enemy-damaged");
            let animCounter = 0;
            
            attack[index]();

            let anim = setInterval(() => {
                if(animCounter < 1){
                    animCounter += 0.1;
                }
                else{
                    enemyImage.classList.toggle("enemy-damaged");
                    clearInterval(anim);
                }
            }, 20);
        };
        
        skillContainer.append(skillButton);
        home.append(skillContainer);
    }
}
function UpdateHP(){
    if(currentHp < 0){
        
        currentHp = 0;
        EnemyDead();
    }
    enemyHpText.innerHTML = "HP: " + currentHp +"/" + maxHp;
}

function RestartBattle(){
    enemyImage.style.display = "";
    enemyImage.classList.toggle("enemy-idle");

    currentHp = maxHp;
    UpdateHP();

    restartButton.style.display = "none";
    block.style.display = "none";
}


function EnemyDead(){
    block.style.display = "flex";
    restartButton.style.display = "none";

    let deadInterval = setInterval(() => {

        enemyImage.classList.toggle("enemy-idle");
        enemyImage.classList.toggle("dead");
        clearInterval(deadInterval);

        let restartButtonInterval = setInterval(() => {
            restartButton.style.display = "block";

            restartButton.onclick = RestartBattle;

            enemyImage.classList.toggle("dead");
            enemyImage.style.display = "none";
            clearInterval(restartButtonInterval);
        }, 1000);

    }, 300);
}





