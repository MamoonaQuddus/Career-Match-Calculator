window.onload= function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateCareer);
}

function calculateCareer(){
    let yourName = document.getElementById("your-name").value;
    let friendName = document.getElementById("Friend-name").value;
     
    if (yourName != "" && friendName != "") {
        let percentage = Math.floor(Math.random() * 101); //0-.99999
        document.getElementById("result-message").innerText = yourName + " and " + friendName + "'s chances of making a great startup duo in tech!:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
    }
        
        
}