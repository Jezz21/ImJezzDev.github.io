const main = document.querySelector(".main");
const page = [];	
let numberOfButtonsToShow = 5;
let numberOfPageToShow = 5;
let currentButtonShowing = 0;
let itemStartAt = 1;
let currentPage = 1;
let previousPage = 1;
let remainder = 0;


let myGameNames = [
    "Game 1", "Game 2", "Game 3", "Game 4", "Game 5",
    "Game 6", "Game 7", "Game 8", "Game 9", "Game 10",
];

AddPage(myGameNames.length);

Main();

function Main()
{
    GetRemainder();
    ItemList(numberOfPageToShow, itemStartAt - 1);
    PageButton(currentButtonShowing, 0);
}

function ChangeNumberOfPageShowing(numberofPage)
{
    numberOfPageToShow = numberofPage;
    itemStartAt = 1;
    Main();
}

function GetRemainder()
{
    remainder = page.length % numberOfPageToShow;
}

//Last Page
function LastPage(){
    if(remainder !== 0){
        let lastpage = page.length - ((page.length % numberOfPageToShow) - 1);
        itemStartAt = lastpage;
    }
    else{
        let lastpage = page.length - (numberOfPageToShow - 1);
        itemStartAt = lastpage;
    }
}

//
function ItemList(numberOfItems, itemStartAt)
{
    main.innerHTML = "";
    main.innerHTML = "<div style = 'text-align:center;color:white;width:100%;'><h1>GAMES</h1><h4>All games made in Unity</h4></div>";
    let modified = numberOfItems + itemStartAt;
    numberOfItems = modified;

    for(let currentItem = itemStartAt; currentItem < numberOfItems; currentItem++){
        if(currentItem < page.length){
            const idiv = document.createElement("div");
            idiv.setAttribute("class", "boxshadow idiv");
            idiv.innerHTML= page[currentItem];
            main.append(idiv);
        }
    }
    DividePages();
    BtnDiv();
}

function AddPage(numberOfBooksToAdd){
    for(let currentBook = 0; currentBook < numberOfBooksToAdd; currentBook++){
        page.push(myGameNames[currentBook].toLocaleUpperCase());
    }
}

//ChangePage
function ChangePage()
{
    ItemList(numberOfPageToShow, (itemStartAt * numberOfPageToShow) * (currentPage-1));
}


//Page Buttons
function DividePages()
{
    if(remainder !== 0)
        currentButtonShowing = Math.floor((page.length/numberOfPageToShow)+1);
    else
        currentButtonShowing = Math.floor(page.length/numberOfPageToShow);

    if(currentButtonShowing > numberOfButtonsToShow)
        currentButtonShowing = numberOfButtonsToShow;
}


function BtnDiv()
{
    const btnDiv = document.createElement("div");
    btnDiv.setAttribute("class", "btn-div");
    main.append(btnDiv)
}

function PageButton(numberToShow, startAt){
    const btnDiv = document.querySelector(".btn-div");
    btnDiv.innerHTML = "";
    let prev = startAt;
    
    for(let currentBtn = startAt; currentBtn < numberToShow; currentBtn++)
    {	
        if(currentBtn < MaxPage())
        {
            const btn = document.createElement("button");
            btn.innerHTML = currentBtn + 1;
            btn.setAttribute("id", "btn" + (currentBtn + 1));

            btn.classList.add("page-buttons");
            if((currentBtn + 1) === currentPage)
                btn.classList.add("active-button");
            btn.onclick = ()=>
            {
                previousPage = currentPage;
                currentPage = currentBtn + 1;
                DividePages();
                GeneratePageButtons(currentBtn);
            }
            btnDiv.append(btn);
        }
        else
        {
            const btn = document.createElement("button");
            btn.innerHTML = prev;
            let cur =  parseInt(btn.innerHTML);
            btn.setAttribute("id", "btn" + prev);

            btn.classList.add("page-buttons");
            if((prev) === currentPage)
                btn.classList.add("active-button");

            btn.onclick = ()=>
            {
                previousPage = currentPage;
                currentPage = cur;
                DividePages();
                GeneratePageButtons(prev);
            }
            btnDiv.prepend(btn);
            prev--;
        }
    }
}

//
function Increasing()
{
    let currentAndPrevDiff = currentPage - previousPage;
    if(currentAndPrevDiff !== 0)
    {
        if(currentAndPrevDiff > 0)
            return true;
        else
            return false;
    }
}

function GeneratePageButtons(currentBtn)
{
    ChangePage();

    if(currentPage < numberOfButtonsToShow)
    {
        PageButton(currentButtonShowing, 0);
    }
    else if(currentPage < MaxPage() - (numberOfButtonsToShow - 2))
    {
        let maxPage = MaxPage();
        let remainingPage = (maxPage - currentBtn) - 1;
        PageButton(currentButtonShowing + (currentBtn - 1), currentBtn - 1);
    }
    else{
        PageButton(MaxPage(), MaxPage() - numberOfButtonsToShow);
    }
}

function MaxPage()
{
    let maxPage;
    if(remainder !== 0)
        maxPage = Math.floor((page.length/numberOfPageToShow)+1);
    else
        maxPage = Math.floor(page.length/numberOfPageToShow);

    return maxPage;
}
