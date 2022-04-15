let placeDiv = document.getElementById("placeDiv");
placeDiv.addEventListener("click", makeDiv);

let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },
];

function makeDiv() {
    for(var i = 0; i < objects.length; i++) {
        let arrayDiv = document.createElement("div");

        arrayDiv.style.backgroundColor = objects[i].color;
        arrayDiv.style.height = objects[i].height;
        arrayDiv.innerHTML = objects[i].width;

        placeDiv.appendChild(arrayDiv);
        console.log(arrayDiv);
    }
}
