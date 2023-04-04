const toDoAddBtn = document.querySelector(".to-do-add-btn")
const toDoRemoveBtn = document.querySelector(".to-do-clear-btn")
const toDoListUI = document.querySelector(".to-do-list")
const toDofilter = document.querySelector(".to-do-find-input")
let removeCompanentIcon = document.querySelectorAll(".card-body")[1]
let toDos //To Do Listesi

toDoAddBtn.addEventListener("click", toDoAdd)
toDoRemoveBtn.addEventListener("click", clearToDoListUI)
removeCompanentIcon.addEventListener("click", removeToDo)
toDofilter.addEventListener("keyup", filter)

function toDoAdd() {
    let toDo = document.querySelector(".to-do-add-input").value
    if (toDo == "" || toDo == null) {
        alert("Lütfen To Do Giriniz!")
    }
    else {
        toDos[toDos.length] = toDo
        localStorage.setItem("toDos", JSON.stringify(toDos))

        createCompanent(toDo)
        document.querySelector(".to-do-add-input").value = ""
    }
}

loadPage()

function loadPage() {
    if (localStorage.getItem("toDos") != null) {
        toDos = JSON.parse(localStorage.getItem("toDos"))
        toDos.forEach(item => createCompanent(item));
    } else {
        toDos = []
    }
}

function createCompanent(toDo) {
    let toDoCompanent = document.createElement("li")
    let toDoRemoveUI = document.createElement("a")
    let removeIcon = document.createElement("i")
    toDoCompanent.textContent = toDo
    toDoCompanent.className = "form-control d-flex justify-content-between"
    toDoCompanent.style.margin = "4px 16px"

    toDoRemoveUI.className = "delete-item"
    toDoRemoveUI.href = "#"

    removeIcon.className = "fa fa-remove"

    toDoListUI.appendChild(toDoCompanent)
    toDoCompanent.appendChild(toDoRemoveUI)
    toDoRemoveUI.appendChild(removeIcon)
}

function removeToDo(e) {
    if (e.target.className == "fa fa-remove") {
        todoTemp = e.target.parentElement.parentElement
        todoTemp.remove()
        toDos = JSON.parse(localStorage.getItem("toDos"))
        for (let i = 0; i < toDos.length; i++) {
            if (toDos[i] == todoTemp.textContent) {
                toDos.splice(i, 1)
                localStorage.setItem("toDos", JSON.stringify(toDos))
                break
            }
        }
    }
}

function clearToDoListUI() {
    if (confirm("Tüm Yapılacak Listesini Silmek İstediğinizden Emin Misiniz?")) {
        localStorage.removeItem("toDos")
        toDos = []
        while (toDoListUI.firstChild)
            toDoListUI.removeChild(toDoListUI.firstChild)
    }

}

function filter() {
    let findValue = toDofilter.value
    if (findValue != "") {
        let toDoValues = JSON.parse(localStorage.getItem("toDos"))
        const search = keyword => toDoValues.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
        //console.log(search(findValue));
        while (toDoListUI.firstChild)
            toDoListUI.removeChild(toDoListUI.firstChild)
        search(findValue).forEach(item => {
            createCompanent(item)
        });
    }
    else {
        while (toDoListUI.firstChild)
            toDoListUI.removeChild(toDoListUI.firstChild)
        loadPage()
    }
}