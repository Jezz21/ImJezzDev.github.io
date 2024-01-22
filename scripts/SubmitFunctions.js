function SubmitNumberOfBooksToshow()
{
    const inputvalue = document.querySelector("#num-of-book");
    let numberofitemvalue;
    if(inputvalue.value === "")
    {
        numberofitemvalue = 1;
    }
    else
    {
        numberofitemvalue = Number(inputvalue.value);
    }

    ChangeNumberOfPageShowing(numberofitemvalue);
}
