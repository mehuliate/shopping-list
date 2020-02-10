var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

console.log(listItems);



function inputlength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("DELETE!!!"));
    li.appendChild(btn);

    btn.onclick = removeParent;

}

function addListAfterClick(){
        if (inputlength() > 0) {
            createListElement();
        }
}

function addListAfterEnter(e){
    if (inputlength() > 0 && e.keyCode === 13) {
        createListElement();
    }
}

function removeParent(e){
    e.target.parentNode.remove();
}


// function addDeleteButton(){
//     var btn = document.createElement("button");
//     btn.appendChild(document.createTextNode("Del"));
//     listItems[]

// }

for (let i = 0; i < listItems.length; i++) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Del"));
    listItems[i].appendChild(btn);

    btn.onclick = removeParent;
}




button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

ul.addEventListener('click', function(e){
    var x = e.target;
    if (x.tagName === "LI") {
        e.target.classList.toggle("done");
    }
});

ul.addEventListener('click', function(e){
    var y = e.target.tagName;
    console.log(y);
})