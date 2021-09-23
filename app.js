var inputTxt = document.querySelector("#txt-input")
var btnTraslate = document.querySelector("#btn-translate")
var outputTxt = document.querySelector("#output-txt")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error" ,error);
    alert("server is down! plz try sometime.....")
}

function clickHandler(){
    var textInput = inputTxt.value

    fetch(getTranslatedURL(textInput))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputTxt.innerHTML = translatedText;
    })
    .catch(errorHandler)
}
btnTraslate.addEventListener('click' ,clickHandler)