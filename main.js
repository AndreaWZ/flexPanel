window.onload = function() {
    selectImages();
};

function selectImages() {
    let container = document.getElementsByClassName("panel");
    let first = document.querySelectorAll(".first");
    let last = document.querySelectorAll(".last");
    // console.log(container);
    // console.log(first);
    for(let i = 0; i < container.length; i++){
        // console.log(container[i]);
        container[i].addEventListener("click", function(){
            first[i].classList.add("effectF");
            last[i].classList.add("effectL");
        })
    }
}