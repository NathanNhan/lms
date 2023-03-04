let searchBtn = document.getElementById("search");

searchBtn.onclick = () => {
    let element = document.getElementById("search_input");
    element.classList.toggle("display_search");
}


let light = document.getElementById("sun");
let night = document.getElementById("moon");
night.click()
console.log("Light is", light.className);
light.onclick = () => {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementsByName("footer").forEach((item) => {
        item.classList.add("text-dark")
    });
    document.querySelectorAll("#facilities .card").forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.border = "1px solid gray"
    });
    document.getElementsByTagName("nav")[0].classList.remove("bg-dark");
    document.getElementsByTagName("nav")[0].classList.add("bg-light");
  
    document.querySelectorAll(".navbar-light .navbar-nav .nav-link").forEach((item) => {
        item.classList.remove("text-light");
        item.classList.add("text-dark");
    })
    if (light.className == "fa fa-sun-o ml-2") {
        light.style.display = "none";
        night.classList.remove("hide");
        
    }
}

night.onclick = () => {
    document.body.style.backgroundColor = "#26243c";
    document.body.style.color = "white";
    document.getElementsByTagName("nav")[0].classList.remove("bg-light");
    document.getElementsByTagName("nav")[0].classList.add("bg-dark");
    document.querySelectorAll(".navbar-light .navbar-nav .nav-link").forEach((item) => {
        item.classList.add("text-light");
        item.classList.remove("text-dark");
    })
    if (night.className == "fa fa-moon-o ml-2") {
        console.log(light);
        night.classList.add("hide");
        light.style.display = "block";
        document.getElementsByName("footer").forEach((item) => {
            item.classList.remove("text-dark")
        });
      
    }
}


