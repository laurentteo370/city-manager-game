let gold = 1000;
let population = 100;
let happiness = 70;
let diplomacy = 50;
let alliances = 0;
 
let houses = 5;
let farms = 2;
let factories = 1;
 
function updateUI() {
document.getElementById("gold").innerText = gold;
document.getElementById("population").innerText = population;
document.getElementById("happiness").innerText = happiness + "%";
 
document.getElementById("houses").innerText = houses;
document.getElementById("farms").innerText = farms;
document.getElementById("factories").innerText = factories;
 
document.getElementById("diplomacy").innerText = diplomacy;
document.getElementById("alliances").innerText = alliances;
}
 
function buildHouse() {
if(gold < 100) return;
 
gold -= 100;
houses++;
population += 10;
 
if(houses >= 10){
gold += 500;
document.getElementById("quest").innerText =
"Atteindre 200 habitants";
}
 
updateUI();
}
 
function buildFarm() {
if(gold < 150) return;
 
gold -= 150;
farms++;
population += 5;
 
updateUI();
}
 
function buildFactory() {
if(gold < 300) return;
 
gold -= 300;
factories++;
happiness -= 5;
 
updateUI();
}
 
function taxIncrease() {
gold += 200;
happiness -= 10;
 
document.getElementById("event").innerText =
"Augmentation des impôts !";
 
updateUI();
}
 
function diplomaticMission() {
diplomacy += 15;
 
if(diplomacy > 100){
diplomacy = 100;
}
 
gold -= 50;
 
document.getElementById("event").innerText =
"Mission diplomatique réussie.";
 
updateUI();
}
 
function makeAlliance() {
 
if(diplomacy < 40){
document.getElementById("event").innerText =
"Diplomatie insuffisante.";
return;
}
 
diplomacy -= 20;
alliances++;
 
document.getElementById("event").innerText =
"Nouvelle alliance signée.";
 
updateUI();
}
 
function nextTurn() {
 
let income =
houses * 10 +
farms * 20 +
factories * 50;
 
gold += income;
 
let random = Math.floor(Math.random() * 4);
 
if(random === 0){
document.getElementById("event").innerText =
"🔥 Incendie dans un quartier !";
 
gold -= 150;
}
 
if(random === 1){
document.getElementById("event").innerText =
"🎉 Festival populaire !";
 
happiness += 10;
}
 
if(random === 2){
document.getElementById("event").innerText =
"⚠ Révolution en préparation !";
 
happiness -= 15;
}
 
if(random === 3){
document.getElementById("event").innerText =
"✅ Aucun incident majeur.";
}
 
if(happiness < 20){
document.getElementById("event").innerText =
"🚩 Révolution !";
gold -= 500;
}
 
updateUI();
}
 
updateUI();
