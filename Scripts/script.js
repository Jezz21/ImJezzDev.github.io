const myNavLarge = document.querySelector(".my-nav-large");
const myNavSmall = document.querySelector(".my-nav-small");
const navButtonLarge = myNavLarge.getElementsByTagName("a");
const navButtonSmall = myNavSmall.getElementsByTagName("a");
const main = document.querySelector("#main");



AddListenerToNavButtons();

function AddListenerToNavButtons()
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

