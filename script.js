
function selectItem(name) {
    document.getElementById("msg").innerText = "You selected: " + name + " 😍";
}

const facts = [
    "The first donut with a hole was created in 1847!",
    "Donuts were originally called 'Olykoeks' meaning oily cakes.",
    "June 7th is celebrated as National Donut Day.",
    "The most expensive donut ever made cost $1,200!"
];
function showHistory() {
    document.getElementById("historyTxt").innerText =
        facts[Math.floor(Math.random() * facts.length)];
}
