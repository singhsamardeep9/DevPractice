var currentStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0;


btn.addEventListener("click",function(){
    if(check == 0){
    currentStatus.innerHTML = "Friends"
    currentStatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    check = 1;
    }
    else{
        currentStatus.innerHTML = "Stranger"
        currentStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0;
    }

    
})
