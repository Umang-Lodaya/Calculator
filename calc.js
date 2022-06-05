function display(val){
    document.getElementById('result').value += val
    return val
}

function solve(){
    let x = document.getElementById("result").value;
    let y = 0;
    if (x.includes('√')) 
    {
        let number = x.split("√");
        let result = parseInt(number[1]);
        console.log(number);
        y = Math.sqrt(result);
    } 
    else if (x.includes("log")) 
    {
        let result = x.split("log");
        let number = parseInt(result[1]);
        y = Math.log10(number);
    }
    else if (x.includes("e")) 
    {
        y = Math.E;
    }
    else if (x.includes("log")) 
    {
        let result = x.split("log");
        let number = parseInt(result[1]);
        console.log(number);
        y = Math.log10(number);
    }
    else if (x.includes("%")) 
    {
        let result = x.split("%");
        let number = parseInt(result[0]);
        y = (number/100);
    } 
    else if (x.includes("ln")) 
    {
        let result = x.split("ln");
        let number = parseInt(result[1]);
        y = Math.log(number,2);
    } 
    else if (x.includes("^2")) 
    {
        let result = x.split("^2");
        let number = parseInt(result[0]);
        y = Math.pow(number,2);
    } 
    else if (x.includes("^")) 
    {
        let result = x.split("^");
        let base = parseInt(result[0]);
        let power = parseInt(result[1]);
        y = Math.pow(base,power);
    } 
    else if (x.includes("1/x")) 
    {
        let result = x.split("1/");
        let number = parseInt(result[1]);
        y = 1/number;
    } 
    else 
    {
        y = eval(x);
    }
    document.getElementById("result").value = y;
    console.log(y);
    return y;    
}

function clearScreen(){
    document.getElementById('result').value = ''
}

function popscreen(){
    let exp = document.getElementById('result').value
    document.getElementById('result').value = exp.slice(0,-1)
}

