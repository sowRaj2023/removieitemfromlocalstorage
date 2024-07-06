let inputValEl = document.getElementById("inputVal");

function saveBtn(){
    let inputValEls = inputValEl.value;
    
    localStorage.setItem("inputValEl", inputValEls);
    

}



function clearBtn(){
    localStorage.removeItem("inputValEl");
}