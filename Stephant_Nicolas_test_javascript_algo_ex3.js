const errorDiv = document.getElementById("error")
//Fonction qui verifie chaque ligne de la grille sans transformation
function checkLine() { 
    bExistError = false;
    for (iterator = 0; iterator <AtoVerify.length; iterator++) { 
        if (!checkArray(AtoVerify[iterator])) { 
            bExistError = true;
            newLine = document.createElement("tr")
            posCol = document.createElement("td")
            visualCol = document.createElement("td")
            posCol.innerHTML = "Error on line : " + iterator
            visualCol.innerHTML = AtoVerify[iterator];
            newLine.appendChild(posCol);
            newLine.appendChild(visualCol);
            errorDiv.appendChild(newLine);
        }
        newLine = undefined;
        posCol = undefined;
        visualCol = undefined;
    }
    if (!bExistError) { 
        noError = document.createElement("p")
        noError.innerHTML = "the table is correct";
        errorDiv.appendChild(noError)
    }   

}

// fonction qui transforme les colonne de la grille en un tableau qui est ensuite verifier
function checkColumn() { 
    bExistError = false;
    for (j = 0; j < AtoVerify.length; j++) { 
        Acolumn = [];
        for (iterator = 0; iterator < AtoVerify.length; iterator++) { 
            Acolumn.push(AtoVerify[iterator][j]);
        }
        if (!checkArray(Acolumn)) { 
            bExistError = true;
            newLine = document.createElement("tr")
            posCol = document.createElement("td")
            visualCol = document.createElement("td")
            posCol.innerHTML = "Error on Column : " + j
            visualCol.innerHTML = Acolumn;
            newLine.appendChild(posCol);
            newLine.appendChild(visualCol);
            errorDiv.appendChild(newLine);
        }
        newLine = undefined;
        posCol = undefined;
        visualCol = undefined;
    }
    if (!bExistError) { 
        noError = document.createElement("p")
        noError.innerHTML = "the table is correct";
        errorDiv.appendChild(noError)
    }   
    
}

//fonction qui transforme les lignes en region en prennant les index autour de "point clef"
// ces points clef etant les index 1,4,7 de chaque ligne et colonne,donnant le centre de la region
// on regarde ensuite autour et on met ces valeur dans un tableau qu'on verifie ensuite.
function checkRegion() {
    bExistError = false;
    RegionList=[]
    Aregion = [];
    for (j = 1; j < AtoVerify.length; j += 3) { 
        for (i = 1; i < AtoVerify.length; i += 3) {
                for (line = -1; line < 2; line++) {
                    for (Col = -1; Col < 2; Col++) {
                        Aregion.push(AtoVerify[j + line][i + Col])
                    }
            }
            RegionList.push(Aregion);
            Aregion = []
            }
        } 
    
    for (region = 0; region < RegionList.length; region++) {
        if (!checkArray(RegionList[region])) { 
            bExistError = true;
            newLine = document.createElement("tr")
            posCol = document.createElement("td")
            visualCol = document.createElement("td")
            posCol.innerHTML = "Error on Region : " + region
            visualCol.innerHTML = RegionList[region];
            newLine.appendChild(posCol);
            newLine.appendChild(visualCol);
            errorDiv.appendChild(newLine);
        }
        newLine = undefined;
        posCol = undefined;
        visualCol = undefined;
     } 
    if (!bExistError) { 
        noError = document.createElement("p")
        noError.innerHTML = "the table is correct";
        errorDiv.appendChild(noError)
    }  
}

function verifySudoku() {
    checkLine();
    checkColumn();
    checkRegion();
}