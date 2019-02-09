// Je déclare deux fonctions mouseover pour changer d'image au survol et mouseout quand je ne survole plus l'image
function mOver(){
// Je vais appliquer une bordure rouge au survol de mon image
document.getElementById('image1').style.border = "2px solid red";
}
// Je vais enlever ma bordure lorsque je ne survol plus mon image
function mOut(){
document.getElementById('image1').style.border = "none";
}
