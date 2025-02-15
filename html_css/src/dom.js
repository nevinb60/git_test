const container = document.querySelector("#container");


const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This was all generated in Javascript. No HTML was written. We are manipulating the DOM.";
container.appendChild(content);

const colorButton = document.createElement('button');
colorButton.textContent = 'DOM CREATED'
colorButton.setAttribute("style", "background:palegreen; color:blue; border-radius:10px;");
container.appendChild(colorButton);


// Event Listener on click
const follow = document.querySelector("#follow");
follow.onclick = () => alert("Don't forget to subscribe!")

//Event Listener addEVENTLISTENER
const red = document.querySelector('#red');
red.addEventListener("click", (e) => {
    red.setAttribute("style", "background-color:red; border-radius: 10px;")
    red.textContent = e;
})

function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;

    const name = document.querySelector('.theme-name')

    name.textContent = newTheme;

}

document.querySelector('.theme').addEventListener('click', setTheme)