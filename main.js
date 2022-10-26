
//Part 1

function strike()
{
    let itemToStrike = document.querySelector("li");
    itemToStrike.style.textDecoration = "line-through";
}
strike();

function setImage(elemId, urlStr)
{
    let image = document.querySelector("#" + elemId);
    image.src = urlStr;
    image.style.height = "300px"
}

setImage("image-1", "https://bit.ly/3f2IfRl");
setImage("image-2", "https://bit.ly/3f2RC3k");
setImage("image-3", "https://bit.ly/3TzQkvD");

function removeItem()
{
    let itemToRemove = document.querySelector("li");
    itemToRemove.remove();
}

removeItem();
removeItem();


function changeFontSize(fontSizeStr, id)
{
    let elemToBeChanged = document.querySelector("#" + id);
    elemToBeChanged.style.fontSize = fontSizeStr;
}

changeFontSize("50px", "heading1"); 


//Part 2

function addElem(elemType)
{
    let uList = document.querySelector("#arguments");
    uList.appendChild(elemType);
}

let imgElem = document.createElement("img");
imgElem.src = "https://bit.ly/3gDns7g";

addElem(imgElem);


function imgSizeMod(img)
{
    img.style.height = "30px"
}

let shrinkIt = document.querySelector("#image-1")
imgSizeMod(shrinkIt); 

function makeInvisible(elem)
{
    elem.className = "invisible"
}    

let cloak = document.querySelector("#whatever")
makeInvisible(cloak);

//Part 3

function addNewItem(item)
{
    let newItem = document.createElement("li");
    newItem.innerText = item;
    return newItem; 
}

let WTF = addNewItem("I hate functions!!!");
addElem(WTF);

function headers(hSize, text)
{
    let newHeader = document.createElement(`h${hSize}`);
    newHeader.innerText = text;
    return newHeader;
}

let evenNewerHeader = headers(2, "Look at me! I'm a Heading!");
addElem(evenNewerHeader);


