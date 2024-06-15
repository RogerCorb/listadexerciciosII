
const exercicios = require('./index.js')
const prompt = require('prompt-sync')();

let sair = false;
while ( !sair ) {

    for ( let index = 1; index < 51; index++ ) {
        console.log( `${index} - exercicio${index}` );
    }

    let escolha = parseInt(prompt("Digite a sua opcao de 1 a 50 ou 51 para sair.:"));

    switch ( escolha ) {
        case 1: exercicios.exercicio1();            
            break;
        case 2: exercicios.exercicio2();            
            break
        case 3: exercicios.exercicio3();            
            break;
        case 4: exercicios.exercicio4();            
            break
        case 5: exercicios.exercicio5();            
            break;
        case 6: exercicios.exercicio6();            
            break
        case 7: exercicios.exercicio7();            
            break;
        case 8: exercicios.exercicio8();            
            break
        case 9: exercicios.exercicio9();            
            break;
        case 10: exercicios.exercicio10();            
            break
        case 11: exercicios.exercicio11();            
            break;
        case 12: exercicios.exercicio12();            
            break
        case 13: exercicios.exercicio13();            
            break;
        case 14: exercicios.exercicio14();            
            break
        case 15: exercicios.exercicio15();            
            break;
        case 16: exercicios.exercicio16();            
            break
        case 17: exercicios.exercicio17();            
            break;
        case 18: exercicios.exercicio18();            
            break
        case 19: exercicios.exercicio19();           
            break;
        case 20: exercicios.exercicio20();            
            break
        case 21: exercicios.exercicio21();            
            break;
        case 22: exercicios.exercicio22();            
            break
        case 23: exercicios.exercicio23();            
            break;
        case 24: exercicios.exercicio24();            
            break
        case 25: exercicios.exercicio25();            
            break;
        case 26: exercicios.exercicio26();            
            break
        case 27: exercicios.exercicio27();           
            break;
        case 28: exercicios.exercicio28();            
            break
        case 29: exercicios.exercicio29();            
            break;
        case 30: exercicios.exercicio30();            
            break
        case 31: exercicios.exercicio31();            
            break;
        case 32: exercicios.exercicio32();            
            break
        case 33: exercicios.exercicio33();            
            break;
        case 34: exercicios.exercicio34();            
            break
        case 35: exercicios.exercicio35();            
            break;
        case 36: exercicios.exercicio36();            
            break
        case 37: exercicios.exercicio37();            
            break;
        case 38: exercicios.exercicio38();            
            break
        case 39: exercicios.exercicio39();            
            break;
        case 40: exercicios.exercicio40();            
            break
        case 41: exercicios.exercicio41();            
            break;
        case 42: exercicios.exercicio42();            
            break
        case 43: exercicios.exercicio43();            
            break;
        case 44: exercicios.exercicio44();            
            break
        case 45: exercicios.exercicio45();            
            break;
        case 46: exercicios.exercicio46();            
            break
        case 47: exercicios.exercicio47();            
            break;
        case 48: exercicios.exercicio48();            
            break
        case 49: exercicios.exercicio49();            
            break;
        case 50: exercicios.exercicio50();            
            break
        case 51: sair = true;            
            break;
    }
}