let charImgs = ["images/knight.png", "images/maskKnight.png", "images/executioner.png", "images/hornedKnight.png", "images/king.png", "images/yellowKnight.png", "images/whiteKnight.png", "images/vampire.png", "images/samurai.png"]

function Character(name, health, image) {
    let elem = "div";
    this.charName = name;
    this.charHealth = health;
    this.charImage = image;

    let myCharId = "myChar" + this.charName;

    let charac = document.createElement(elem);
    charac.id = myCharId;
    charac.classList.add("newChar");
    document.getElementById("characterGroup").appendChild(charac);
    
    let names = document.createElement(elem);
    names.innerHTML = this.charName;
    names.classList.add("name");
    document.getElementById(myCharId).appendChild(names);

    let healthy = document.createElement(elem);
    healthy.style.width = this.charHealth;
    document.getElementById(myCharId).appendChild(healthy);
    healthy.classList.add("healthbar");

    let img = document.createElement("img");
    img.src = this.charImage;
    document.getElementById(myCharId).appendChild(img);
    img.classList.add("image");
}

function Create() {
    let chName = prompt("What would you like to name this character?");
    let chHealth = prompt("How much health would you like this character to have? (0-100)");
    chHealth = chHealth * 2 + "px";
    let chImage = charImgs[Math.floor(Math.random() * charImgs.length)];
    let character = chName;
    character = new Character(chName, chHealth, chImage);
}