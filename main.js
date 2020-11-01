window.onload = function() {
    selectImages();
};

function selectImages() {
    let container = document.getElementsByClassName("panel");
    let first = document.querySelectorAll(".first");
    let last = document.querySelectorAll(".last");
    for(let i = 0; i < container.length; i++){
        container[i].addEventListener("click", function(){
            first[i].classList.toggle("firstEffect");
            first[i].classList.toggle("first");
            last[i].classList.toggle("lastEffect");
            last[i].classList.toggle("last");
            container[i].classList.toggle("imgEffect");
            console.log(container[i].classList.length);
            if(container[i].classList.length == 2){
                this.style.padding = "0 60px 0 60px";
            } else {
                container[i].style.padding = "0 25px 0 25px";
            }
        })
    }
}
