// fonction qui verifie si la ligne contient uniquement des nombres et qu'il sont unique. 
// accepte uniquement les tableaux de taille 9
function checkArray(A) { 
    if ((Array.isArray(A)) && (A.length==9)) {
        alreadyChecked = []
        for (i = 0; i < A.length; i++) {
            if (!isNaN(A[i]) && !(alreadyChecked.includes(A[i]))){
                alreadyChecked.push(A[i])
            }
            else { 
                return false
            }
        }
        return true;
    }
    else { 
        return false;
    }
}