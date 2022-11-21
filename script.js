/*
DESAFIO 03 - CELSIUS TO FAHRENHEIT
Nesse desafio faremos uma função que vai receber uma string em Celsius ou Fahrenheit, e fazer a transformação de uma unidade para a outra.

Desafio:

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/


// Option 1
/*
function temperatureConversion (temperature) {
    let toCelsius = (temperature - 32) * 5/9 
    let toFahrenheit = temperature * 9/5 + 32

    console.log(`${toCelsius.toFixed(1)} in Celsius`)
    console.log(`${toFahrenheit.toFixed(1)} in Fahrenheit`)
}

temperatureConversion('15')
*/

// Option 2
function temperatureConversion (temperature) {
    let temperatureEntry = String(temperature).toUpperCase();
    let temperatureFinal = temperatureEntry.slice(0,temperatureEntry.length-1);
    
    if(temperatureEntry.includes('F') == true && temperatureEntry.includes('C') == false) {
        let toCelsius = (temperatureFinal - 32) * 5/9 
        console.log(`${toCelsius.toFixed(1)} C`);
    } else if(temperatureEntry.includes('C') == true && temperatureEntry.includes('F') == false) {
        let toFahrenheit = temperatureFinal * 9/5 + 32
        console.log(`${toFahrenheit.toFixed(1)} F`);
    } else {
        console.log('Invalid temperature. Please use C/F: "12 C", "25.3 F".');
    }

}

temperatureConversion('27F')
