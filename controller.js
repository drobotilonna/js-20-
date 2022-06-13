


let main_block = document.querySelector(".main");
let weather_block = document.querySelector(".weather");
let explore_btn = document.querySelector(".send");
let input = document.querySelector(".input-text");



let city = localStorage.getItem("city");

if (city != null) {
    exploreHandeler(city);
    main_block.style.display = "none";
    weather_block.style.display = "flex";
} else {
    explore_btn.addEventListener("click", () => {
        city = input.value;
        exploreHandeler(city);
        main_block.style.display = "none";
        weather_block.style.display = "flex";
    });
}


