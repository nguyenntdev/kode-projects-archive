/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function dialog_setup(color, typebutton, button, title, content) {
    document.getElementById("dialog_title").innerHTML = title;
    document.getElementById("dialog_content").innerHTML = content;
    document.getElementById("dialog_button").innerHTML = button;
    document.getElementById("dialog_button").className = typebutton;
    document.getElementById("dialog_header").style.backgroundColor = color;
}

function save() {
    //$("#dialog").modal({show : true});
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    //console.log(title, content);
    if (title != "") {
        if (title != "system") {
            localStorage.setItem(title, content);
            dialog_setup("", "btn btn-primary", "OK", "Finish!", "Your note is saved!");
            document.getElementById("title").value = "";
            document.getElementById("content").value = "";
            //console.log(document.getElementById("private").checked);
            if (document.getElementById("private").checked == false) {
                var list = localStorage.getItem("system");
                list = title + "|" + list;
                localStorage.setItem("system", list);
            }
            $("#dialog").modal({ show: true });
        } else {
            dialog_setup("red", "btn btn-danger", "Close", "An error occured", "You cannot use the name 'system'. Please change your note name. ");
            $("#dialog").modal({ show: true });
        }
    } else {
        dialog_setup("red", "btn btn-danger", "Close", "An error occured", "You didn't type in your title name!");
        $("#dialog").modal({ show: true });
    }
}

function read() {
    title = document.getElementById("read_title").value;
    if (title != "") {
        content = localStorage.getItem(title);
        if (content == null) {
            dialog_setup("primary", "btn btn-primary", "Create", "This note is blank", "Are you sure you want to save a blank note?");
            $("#dialog").modal({ show: true });
        } else {
            document.getElementById("read_content").innerHTML = content;
        }
    } else {
        dialog_setup("red", "btn btn-danger", "Close", "An error occured", "You didn't type in your title name!");
        $("#dialog").modal({ show: true });
    }
}

function opennote() {
    document.getElementById("appname").innerHTML = sessionStorage.getItem("temp");
    document.getElementById("content").innerHTML = localStorage.getItem(sessionStorage.getItem("temp"));
}

function additem(input) {
    var tag = document.createElement("a");
    //tag.href = "#";
    tag.className = "list-group-item list-group-item-action";
    //tag.addEventListener("click", opennote());
    var text = document.createTextNode(input);
    tag.appendChild(text);
    var elemement = document.getElementById("listview");
    elemement.appendChild(tag);
}

function init() {
    //kiểm tra hỗ trợ của trình duyệt
    if (typeof(localStorage) == "undefined") {
        document.getElementById("appname").innerHTML = "Your browser is not supported, please try using Chrome or Firefox instead.";
        open("error.html", "_self");
    } else {
        document.getElementById("appname").innerHTML = "Mini Notes";
    }
    // kiểm tra truy cập và dữ liệu
    if (localStorage.getItem("system") == null) {
        //khởi tạo 
        localStorage.setItem("system", "");
    }
    list_string = localStorage.getItem("system");
    var list = list_string.split("|");
    for (var i = 0; i < list.length - 1; i++) {
        //console.log(list[i]);
        additem(list[i]);
    }

    //thêm sự kiện
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', event => {
            //handle 
            console.log(item.innerText);
            sessionStorage.setItem("temp", item.innerText);
            open('read.html', '_self');
        })
    });
}

function edit() {

}