// poppfunction when user click on add task button
function popup() {
    let body = document.getElementsByTagName("body")[0];
    let main = document.createElement("main");
    main.innerHTML = body.innerHTML;
    main.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(main);
    let div = document.createElement("div");
    div.className = "new";
    div.innerHTML = `<p class="adl">Add New Task</p>
    <input type="text" placeholder="Add New Task" id="name">
    <div class="popupWindow">
        <button onclick="add_task()">Add</button>
        <button onclick="goBack()">Close</button>
    </div>`;
    body.append(div);
}

// Add task
const task_list = [];
let counter = 0;
let Count = 1;
let add_task = () => {
    let card_Title = document.getElementById("name").value;
    if (card_Title !== "") {
        const tempObj = {
            id: Date.now(),
            taskname: card_Title,
        };
        task_list.push(tempObj);
        document.getElementById("msg").style.visibility = "hidden";
        let parent = document.getElementById("parent");
        parent.innerHTML += `<div id= ${counter} class="item">
                <span class="c2" onclick="expandItem(this)">${card_Title}</span>
                <br>
                <hr>
                <ul class="tasks" id="items-list-${counter}"></ul>
                <i class="fa-solid fa-trash-can close" onclick="delList(this)"></i>
                <i class="fa-solid fa-circle-plus add_task" id="add-btn-${counter++}" onclick="popup2(); getListID(event)"></i>
            </div>`;
        let body = document.getElementsByTagName("body")[0];
        let main = document.getElementsByTagName("main")[0];
        body.innerHTML = main.innerHTML;
    } else {
        alert("Plese Enter Task");
    }
};

function popup2() {
    let body = document.getElementsByTagName("body")[0];
    let main = document.createElement("main");
    main.innerHTML = body.innerHTML;
    main.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(main);
    let div = document.createElement("div");
    div.className = "new";
    div.innerHTML = `<p class="adl">Add New Item</p>
    <input type="text" placeholder="Add New Item" id="item_title" autofocus>
    <div class="popupWindow">
        <button onclick="add_item(this)">Add</button>
        <button onclick="goBack()">Close</button>
    </div>`;
    body.append(div);
}

let listID = "";

function getListID(tasks) {
    listID =
        tasks.target.previousSibling.previousSibling.previousSibling.previousSibling
        .id;
}

let add_item = () => {
    let item_title = document.getElementById("item_title").value;
    if (item_title !== "") {
        let li = document.createElement("li");
        document.getElementById(listID).appendChild(li);
        li.id = `item-${Count++}`;
        li.innerHTML = `<span>${item_title}</span>
        <button class="btn" onclick="strike(this)">mark done</button>`;
        let body = document.getElementsByTagName("body")[0];
        let main = document.getElementsByTagName("main")[0];
        body.innerHTML = main.innerHTML;
    } else {
        alert("Please Enter Additonal Items");
    }
};

let strike = (btn) => {
    btn.parentElement.classList.add("marked");
    btn.classList.add("hide");
};

// to delete icon
let delList = (trash_can) => {
    trash_can.parentElement.remove();
    task_list.splice(trash_can.parentElement.id, 1);
    if (task_list.length === 0) {
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").style.opacity = 0.7;
    }
};

// go for home page
function goBack() {
    let body = document.getElementsByTagName("body")[0];
    let main = document.getElementsByTagName("main")[0];
    body.innerHTML = main.innerHTML;
}

// when user click on card title the card expand like new page
let expandItem = (card) => {
    let body = document.getElementsByTagName("body")[0];
    let hold = document.createElement("section");
    hold.innerHTML = body.innerHTML;
    body.innerHTML = ``;
    body.append(hold);
    let div = document.createElement("div");
    div.className = "popup";
    div.innerHTML = `<header class="item_expand_header">
      <div class="expBack" onclick="expClose()">
        <i class="fa-solid fa-circle-chevron-left" style="color:#00a5ec"></i>
        <span style="color:#00a5ec">Back</span>
      </div>
      <span id="itemExpTitleID" class="itemExpTitle" style="color:#00a5ec">${card.innerText}</span>
      <div class="Add_expression" onclick="popup()">
        <i class="fa-solid fa-circle-plus" style = "color:#00a5ec"></i>
        <span style="color:#00a5ec">Add Task</span>
      </div>
    </header>
    <div class="content">
        <div id="itemDetail" class="item_Detail" style="color:#00a5ec">
            ${card.parentElement.innerHTML}
        </div>
    </div>`;
    body.append(div);
};

function expClose() {
    let body = document.getElementsByTagName("body")[0];
    let hold = document.getElementsByTagName("section")[0];
    body.innerHTML = hold.innerHTML;
}