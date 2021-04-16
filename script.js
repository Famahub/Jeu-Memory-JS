const divResult = document.querySelector('#result');

var oldImg = [];
var displayNb = 0;
var ready = true ;
var tabResult = tabAleatoire();

// Générer un tableau qui va contenir l'ensemble de nos éléments 4 lignes et 4 colonnes
var tabMemory = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

// Générer un tableau résultat chiffre aléatoire
// var tabResult = [
//     [1,7,3,5],
//     [4,3,2,6],
//     [4,1,6,5],
//     [2,8,7,8],
// ];


displayTab();
// Générer une fonction qui permettra d'afficher le tableau
function displayTab() {
    var txt = '';
    for(var i=0; i < tabMemory.length; i++){// Parcourir le tableau
    txt += '<div>';
        for(var j=0; j < tabMemory[i].length ; j++){
            if(tabMemory [i][j] === 0) { 

    txt +="<button class = 'btn btn-primary m-2' style='width:100px; height:100px' onclick = 'verif(\""+i+"-"+j+"\")'>Hello</button>"; // Le backslash guillemet (\") permet de désactiver les côtes pour qu'il devienne une chaine de caractères txt.
        } else {
        txt += "<img src = '"+getImage(tabMemory[i][j])+"' style='width:100px; height:100px' class='m-2'>";
        }

        }
        txt += '</div>';


    }
    divResult.innerHTML = txt;
    
}
//Générer une fonction qui va récupérer une valeur et retourner l'image correspondante
function getImage(valeur){
    var imgTxt = 'image/';
    switch(valeur){
            case 1 :imgTxt += 'elephant.png';
            break;
            case 2 :imgTxt += 'giraffe.png';
            break;
            case 3 :imgTxt += 'hippo.png';
            break;
            case 4 :imgTxt += 'monkey.png';
            break;
            case 5 :imgTxt += 'panda.png';
            break;
            case 6 :imgTxt += 'parrot.png';
            break;
            case 7 :imgTxt += 'penguin.png';
            break;
            case 8 :imgTxt += 'pig.png';
            break;            
            default : console.log ('Cas non pris en compte');
    }
    return imgTxt;
}
//Générer la fonction verif que va récuperer les éléments des boutons (lignes et colonnes).
function verif(button) {
    if(ready) {
         // au click agrémenter displayNb ++
    displayNb++;
    var ligne = button.substr(0,1);
    var colonne = button.substr(2,1);
    tabMemory[ligne][colonne] = tabResult[ligne][colonne];
    displayTab();
    
// Si le nombre est supérieur à 1
    if(displayNb >1){
        ready = false;
        setTimeout(() => {

            //verification
        // Si les 2 images ne correspondent pas on rénitialise les 2 valeurs et afficher tableau.
        if(tabMemory[ligne][colonne] !== tabResult[oldImg[0]][oldImg[1]]){
            tabMemory[ligne][colonne] =  0; 
            tabMemory[oldImg[0]][oldImg[1]] = 0;
        } else {
            applause.play();

        }
        displayTab();
        ready = true;
        displayNb = 0 ; // rénitialise à 0 au 2 ème click si l'image ne correspond pas.
// Pour verifier si les 2 images correspondes laisser les images afficher si elle ne corresponde pas remettre les images à 0 et conserver le click
// OldImg 2ème image cliqué la ligne et la colonne du tableau est conservé et obtenir la valeur
        oldImg = [ligne,colonne];
    },1000) // Une seconde de décalage entre le click et le retour des images

    } else {
// Pour verifier si les 2 images correspondes laisser les images afficher si elle ne corresponde pas remettre les images à 0 et conserver le click
// OldImg 2ème image cliqué la ligne et la colonne du tableau est conservé et obtenir la valeur
oldImg = [ligne,colonne];

    }

    }

}

function tabAleatoire() {
    var tab = [];
    var nbImgPosition = [0,0,0,0,0,0,0,0];
    for(var i = 0 ; i < 4 ; i++){
        var ligne = [];
        for(var J = 0 ; J < 4 ; J++){
            var end = false;
            while(!end){
                var randomImg = Math.floor(Math.random() * 8);
            if(nbImgPosition[randomImg]< 2){
                ligne.push(randomImg + 1);
                nbImgPosition[randomImg]++ ;
                end = true;
            }

            }
            
        }
        tab.push(ligne);
    }
        
    return tab;
    
}




