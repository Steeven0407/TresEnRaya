let turno = 0;
const conDiv = document.getElementById("contenedor-principal");
const conX = document.getElementById("conX")
const con0 = document.getElementById("con0")
let validaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let gano = false;
let vicX = 0
let vicO = 0
let msg = document.getElementById("mensaje")

function empezarDenuevo(){
    validaciones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const hijos = conDiv.querySelectorAll('div');
    gano=false;
    turno=0;
    msg.textContent = ""
        hijos.forEach(function(hijo) {
 
            if(hijo.children.length>0){
                hijo.removeChild(hijo.children[0])
            }
            hijo.onclick = ()=> movimiento(hijo.id)
            console.log("Impresión de hijo",hijo)
        });
}
 
const movimiento= (a)=>{
    const elemento = document.getElementById(a)
    const logoX = new Image(100, 100)
    const logoO =new Image(100, 100);
    logoX.src = "./img/x.png"; // Turno 1
    logoO.src = "./img/o.png"; // Turno 0
 
    if (elemento.innerHTML == "") {
 
        if (turno == 0) {
            elemento.appendChild(logoO);
            turno++
            
        } else {
            elemento.appendChild(logoX);
            turno--
        }
 
        const posicion = parseInt(elemento.id.charAt(3))
        validaciones[posicion - 1] = elemento.innerHTML
        console.log(posicion)
 
        console.log(validaciones);
        if (validaciones[0] == validaciones[1] && validaciones[0] == validaciones[2] || 
            validaciones[3] == validaciones[4] && validaciones[3] == validaciones[5] ||
            validaciones[6] == validaciones[7] && validaciones[6] == validaciones[8] || 
            validaciones[0] == validaciones[3] && validaciones[6] == validaciones[0] ||
            validaciones[1] == validaciones[4] && validaciones[1] == validaciones[7] || 
            validaciones[2] == validaciones[5] && validaciones[2] == validaciones[8] ||
            validaciones[0] == validaciones[4] && validaciones[0] == validaciones[8] ||
            validaciones[2] == validaciones[4] && validaciones[2] == validaciones[6]) {
            gano = true;
        }
 
        if(gano && turno==1){
            console.log("Gano el O");
            vicO++
            msg.textContent= "Gano el 0"
            
            con0.textContent= vicO
        }
        if(gano && turno==0){
            console.log("Gano la X");
            vicX++
            msg.textContent="Gano la X"
            conX.textContent= vicX

        }
    }
    if(gano){
        const hijos = conDiv.querySelectorAll('div');
        hijos.forEach(function(hijo) {
            hijo.onclick = ()=>this.onclick=false
        });
    }
}
 