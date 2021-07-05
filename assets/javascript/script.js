$(document).ready(function(){

    $('#item2-btn').click(function(){
        let n1=prompt("Ingrese primer numero");
        $("#item2-numero1").text(n1);
        let n2=prompt("Ingrese segundo numero");
        $("#item2-numero1").text(n2);
        $("#item2-suma").text(parseInt(n1)+parseInt(n2));
        $("#item2-resta").text(n1-n2);
        $("#item2-multiplicacion").text(n1*n2);
        $("#item2-divicion").text(n1/n2);
        $("#item2-modulo").text(n1%n2);

    })

    $('#item3-btn').click(function(){
        let n1=prompt("Ingrese  temperatura en grados Celcius");
        $("#item3-c").text(n1+"°");

        $("#item3-k").text(parseInt(n1)+273.15+"°");
        $("#item3-f").text(parseInt(n1)*(9/5)+32+"°");

    })

    $('#item4-btn').click(function(){
        let n1=parseInt(prompt("Ingrese numero de dias"));
        $("#item4-dias").text(n1);

        $("#item4-equivalente").text(Math.floor(n1/365)+" años, "+ Math.floor((n1%365)/7)+" semanas y "+Math.floor((n1%365)%7)+" dias");

    })

    $('#item5-btn').click(function(){

        let total=0;

        for(let x=1;x<=5;x++){
            let n1=parseInt(prompt("Ingrese numero "+x));
            total+=n1;
            $("#item5-n"+x).text(n1);
        }
       

        $("#item5-s").text(total);
        $("#item5-p").text(total/5);

    })



})