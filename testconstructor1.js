function Weapon(name, damage, range, aug) {
	this.name = name;
	this.damage = damage;
	this.range = range;
	this.aug = aug;
}

function build() {
var weapon1 = new Weapon (
	document.getElementById("name").value,
	document.getElementById("die").value,
	document.getElementById("range").value,
	document.getElementById("aug").value
	);

var w = document.getElementById("name").value;
document.getElementById("display1").innerHTML = "Name: " + w;
var x = document.getElementById("die").value;
document.getElementById("display2").innerHTML = "Damage Dice: " + x;
var y = document.getElementById("range").value;
document.getElementById("display3").innerHTML = "Range: " + y;
var z = document.getElementById("aug").value;
document.getElementById("display4").innerHTML = "Augment: " + z;

console.log(weapon1);
}

