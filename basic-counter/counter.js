const counter = document.getElementById("counterId")

let count = 0

counter.textContent = count

//document.querySelector(".positive-btn").addEventListener("click", plus)
//document.querySelector(".negative-btn").addEventListener("click", minus)
//document.querySelector(".reset-btn").addEventListener("click", reset)


function plus(){
    count++
    counter.textContent = count
}

function minus()
{
    count--
    counter.textContent = count
}

function reset()
{
    count = 0
    counter.textContent = count
}

