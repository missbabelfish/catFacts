document.querySelector('#getFacts').addEventListener('click', getFact) 

let kitty = document.querySelector('img');
let fact = document.querySelector('#fact');

function getFact() {

    fetch('https://catfact.ninja/fact')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            fact.innerText = data.fact;         
        })
        
    kitty.src = 'http://placekitten.com/200/300';
}

