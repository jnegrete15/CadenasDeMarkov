
//Obtenemos datos de las cajas de texto
document.getElementById('boton').addEventListener('click',getDatos);

function getDatos()
{
    const P11 = document.getElementById('AA').value;
    const P12 = document.getElementById('AB').value;
    const P13 = document.getElementById('AC').value;
    const P21 = document.getElementById('BA').value;
    const P22 = document.getElementById('BB').value;
    const P23 = document.getElementById('BC').value;
    const P31 = document.getElementById('CA').value;
    const P32 = document.getElementById('CB').value;
    const P33 = document.getElementById('CC').value;
    const iteraciones = document.getElementById('iteraciones').value;

    var PS1 = new Nodo(P11);
    var PS2 = new Nodo(P12);
    var PS3 = new Nodo(P13);

   
    var i = 1;
    do{
        calcular1(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P11,P21,P31);
        calcular2(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P12,P22,P32);
        calcular3(PS1.getValor() ,PS2.getValor() ,PS3.getValor() ,P13,P23,P33);
        
        console.log(resultado1)
        console.log(resultado2)
        console.log(resultado3)
        PS1.setValor(resultado1)
        PS2.setValor(resultado2)
        PS3.setValor(resultado3)
        console.log("__________________________________")
        i++
    }while(i<=iteraciones)
}


function calcular1(PS1,PS2,PS3,P11,P21,P31)
{
    resultado1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
    return resultado1 
    //console.log(PS1.valor)
    
}

function calcular2(PS1,PS2,PS3,P12,P22,P32)
{
    resultado2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3);
    return resultado2


}

function calcular3(PS1,PS2,PS3,P13,P23,P33)
{
    resultado3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
    return resultado3

}


//function calcular(PS1,PS2,PS3,P11,P12,P13,P21,P22,P23,P31,P32,P33)
//{
   //     PS1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
     //   PS2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3);
       // PS3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
        //console.log(`Iteracion: ${i}`);
        //console.log(`El valor de PS1 = ${PS1}`);
        //console.log(`El valor de PS2 = ${PS2}`);
        //console.log(`El valor de PS3 = ${PS3}`);
        //function calcular(PS1,PS2,PS3,P11,P12,P13,P21,P22,P23,P31,P32,P33)
//{
    //PS1 = ((PS1*P11)+(PS2*P21)+(PS3*P31)).toFixed(3);
    //PS2 = ((PS1*P12)+(PS2*P22)+(PS3*P32)).toFixed(3);
    //PS3 = ((PS1*P13)+(PS2*P23)+(PS3*P33)).toFixed(3);
    //console.log(`Iteracion:-------------------------`);
    //console.log(`El valor de PS1 = ${PS1}`);
    //console.log(`El valor de PS2 = ${PS2}`);
    //console.log(`El valor de PS3 = ${PS3}`);
//}

//}








//checar recursividad para resolver el problemas
















