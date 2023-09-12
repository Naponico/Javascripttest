// On cree notre tableau 2D en 9x9 en creaun tableau dans les 9 premiere case.
var AtoVerify = Array(9).fill().map(() => Array(9));

//fonction qui lis un tableau a une dimension contenant des suite de charactere
// ["3 4 2 3 4 5 6"," 3 9 8 7 2 6 ",...] et renvoi un tableau en 2D avec chaque charactere
// disposer convenablement : [[3],[4],[2]...] pour l'exemple si dessus.
function readAndTransfer(oneDimArray) {
    arrLength = oneDimArray.length;
    for (j = 0; j < 9; j++) { 
        AtoVerify[j] = oneDimArray[j].split(" ")
        for (i = 0; i < AtoVerify[j].length; i++) { 
            AtoVerify[j][i]=Number(AtoVerify[j][i])
        }
    }

}

// fonction qui prend un tableau a deux dimension et qui integre les valeur dans un tableau HTML
function readAndOutputHTML(twoDimArray) {
    motherDiv=document.getElementById("sudoku")
    for (i = 0; i < twoDimArray.length; i++) {
        newLine = document.createElement("tr")
        motherDiv.appendChild(newLine);
        for (j = 0; j < twoDimArray[i].length; j++) { 
            newCol = document.createElement("td")
            newCol.innerHTML=twoDimArray[i][j]
            newLine.appendChild(newCol)
        }
    }
}
 
//fonction qui initialise la page et lance la verification du sudoku
//array_number etant la nouvelle variable.
function initializeDataAndPage() { 
    readAndTransfer(array_number);
    readAndOutputHTML(AtoVerify);
    verifySudoku();
}
