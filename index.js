/*-------------------------------------------------- atividade 1

function calcularIdadePet(){
    idadehumano = [];

    for(i =0;i<3;i++){
        var idadepet = parseInt(prompt("qual é a idade do seu cachorro?"))

        idadehumano[i] = idadepet * 7;

        alert('A idade do seu cachorro em anos humanos é de '+ idadehumano[i] + ' anos')
    }
   

}
calcularIdadePet();


---------------------------------------------------------*/


/*------------------------------------------------------- atividade 2
function calcularIdadePet2(){
    nomePet = ['pipoca','zeus','kronos']
    especie = ['cachorro','gato','hamster'];
    idadepet =[21,15,120]
    idadehumano = ['7 anos','15 anos','10 dias' ];

    for(i =0;i<3;i++){
        
        alert(` ${nomePet[i]} tem ${idadepet[i]} anos em anos de verdade! Um(a) ${especie[i]} tem uma 
        relação de ${idadehumano[i]}  de ${especie[i]} para cada 1 ano humano`)
        
    }
   

}
calcularIdadePet2();


-----------------------------------------------------------*/
/*------------------------------------------------------------ atividade 3

function calcularMeuLanche(){

    idade =[20, 60, 85];
    lanches = [4, 3, 5];
    lanchespordia =[];
    for(i =0;i<3;i++){

        lanchespordia[i] = lanches[i] * (idade[i]* 365);

        alert("Você precisará de "+ lanchespordia[i]+ " lanches para durar até a idade "+ idade[i]);
    }
}
calcularMeuLanche();

-----------------------------------------------------------*/

/*------------------------------------------------------------ atividade 4

function calcularCircunferencia(){

    raio = [8,4,6];

    circu = [];

    for(i =0;i<3;i++){
       
        circu[i] = 2* 3.14 * raio[i];

       alert('A circunferência é ' + circu[i] +" cm");        
    }
}
calcularCircunferencia();



function calcularArea(){

    raio = [8,4,6];

    area = [];

    for(i =0;i<3;i++){
       
        area[i] =3.14 * (raio[i] * 2);

       alert('A área é ' + area[i] + "cm²" );        
    }
}
calcularArea();


-------------------------------------------------------------*/
//TC/5 = (0°C × 9/5) + 32
/*-------------------------------------------------- atividade 5

function converterCelsiusFahrenheit(){

    tc = [30, 45, 0];
    convert = []

    for(i =0;i<3;i++){
       
        convert[i] = (tc[i] * 9/5) + 32;

        alert(tc[i] +" C é igual a "+ convert[i] +"F")            
    }
}
converterCelsiusFahrenheit();


//(32°F − 32) × 5/9 

function converterFahrenheitCelsius(){

    tf= [256,12, 567];
    conver = []

    for(i =0;i<3;i++){
       
        conver[i] = (  tf[i] - 32) * 5/9 ;

        alert(tf[i] +" F é igual a "+ parseInt(conver[i]) +"c")            
    }
}  
converterFahrenheitCelsius(); 

-----------------------------------------------------*/