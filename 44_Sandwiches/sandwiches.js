function make_sandwich(item) {
    console.log("\n Making your sandwich with:");
    item.forEach(function (element) { return console.log("- " + element); });
    console.log("Enjoy your sandwich !\n");
}
make_sandwich(['Ham', 'Cheese', 'lettuce']);
make_sandwich(['Turkey', 'Bacon']);
make_sandwich(['Peanut Butter', 'Jelly']);
