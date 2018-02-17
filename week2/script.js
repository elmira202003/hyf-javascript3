'use strict'
{
    const url = 'https://api.github.com/orgs/HackYourFuture/repos';


    let myRoot = document.getElementById("root");



    function render() {

        let myH1 = document.createElement("h1");
        myRoot.appendChild(myH1);
        myH1.innerHTML = "HACKYOURFUTURE REPOSITORIES";
        let div = document.createElement("div");
        myRoot.appendChild(div);
        let myInput = document.createElement("input")
        div.appendChild(myInput);

        let myButton = document.createElement("button");
        div.appendChild(myButton);
        myButton.innerHTML = "CLICK ME!";
        myButton.addEventListener("click", function () {
            console.log("loading is successful!");
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url + myInput.value);
            xhr.onload = function () {
                const myData = JSON.parse(xhr.responseText);
                console.log(myData);

            };
            xhr.send();
        });
    }
    render();


}
