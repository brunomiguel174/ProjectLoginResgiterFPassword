const form = document.querySelector("form");

setTimeout(() =>{
    form.classList.add("appear");
},0.8);

form.addEventListener('submit', (event)=>{
    event.preventDefault()
});