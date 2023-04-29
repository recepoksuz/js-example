searchArea = document.querySelector(".form-control")
findButton = document.querySelector(".find-btn")
removeButton = document.querySelector(".remove-btn")
imagesArea = document.querySelector(".images")


findButton.addEventListener("click", search)
removeButton.addEventListener("click", removeFunc)

function search(){
    value = searchArea.value.trim()
    console.log(value)
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
    method: "GET",
    headers : {
        Authorization: "Client-ID PvTIdRG1OBkaFh80NJLFNwkKbWfRt_P-LQx9SYbZuIU"
    }})
    .then((res) => res.json())
    .then((data)=>{
        if(imagesArea.firstChild != null){
            removeFunc()
        }
        (data.results).forEach(item => {
            url = item.urls.small
            createImage(url)
            console.log(url)
        });
    })
    .catch((err)=>console.log(err))
}

function createImage(url){
    card = document.createElement("div")
    image = document.createElement("img")

    card.style.width = "250px"
    card.style.height = "250px"
    card.style.margin = "0 3% 3% 0"
    card.style.boxShadow = "3px 3px 15px"

    image.src = `${url}`
    image.style.width = "100%"
    image.style.height = "100%"

    imagesArea.appendChild(card)
    card.appendChild(image)
}

function removeFunc(){
    while(imagesArea.firstChild){
        imagesArea.removeChild(imagesArea.firstChild)
    }
}