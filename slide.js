function debounce(func, wait) {
    let timeout;
    return function() {
        const later = () => {
            clearTimeout(timeout);
            func.apply(this, arguments);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.getElementById("next").onclick = debounce(function(){
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
}, 300);

document.getElementById("prev").onclick = debounce(function(){
    let lists = document.querySelectorAll(".item");
    let lastSlide = lists[lists.length - 1];
    document.getElementById("slide").prepend(lastSlide);
}, 300);
