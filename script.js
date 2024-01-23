const myNavLarge = document.querySelector(".my-nav-large");
const myNavSmall = document.querySelector(".my-nav-small");
const navButtonLarge = myNavLarge.getElementsByTagName("a");
const navButtonSmall = myNavLarge.getElementsByTagName("a");
const main = document.querySelector("#main");

AddListener();


function AddListener()
{
    for (let index = 0; index < navButtonLarge.length; index++) {
        const selected = navButtonLarge[index];
        selected.addEventListener("click", () => {
            
            const blackButtons = myNavLarge.querySelectorAll(".w3-black");
    
            blackButtons.forEach(element => {
                element.classList.remove("w3-black");
            });
    
            selected.classList.add("w3-black");
    
            ShowSelectedPage(index);
    
        });
    }
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
