 let tradeCode = (str) =>{
    let upperCase = str.toUpperCase().split(" ");
    let code= "";
    if(upperCase.length>=3){
        upperCase=upperCase.slice(0,2);
        code="TRADE"+ upperCase.join(""); 
        console.log(code)
        console.log(code.length)
        if(code.length>15){
            console.log("*********")
            console.log("Text is more than 15 characters, please change")
            console.log("********")
            return
        }
        else{
            return
        }
       
    }
    else if(upperCase.length<=2){
        code= "TRADE"+ upperCase.join("");
        console.log(code)
        if(code.length>15){
        console.log("*********")
        console.log(`Text is ${code.length} characters long, it needs to be less than 15 characters`)
        console.log("********")
        return
        }
    }
} 