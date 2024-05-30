window.alert(`Đây là resume của Lê Duy Hiển, cảm ơn anh/chị đã dành thời gian xem qua❤`)
//counter views
const counter = document.querySelector(".counter-number")

async function updateCounter(){
    let response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }}
    
    response  = await fetch("https://dma6l8arzg.execute-api.ap-southeast-1.amazonaws.com/dev/calculate" );
    
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}
updateCounter();