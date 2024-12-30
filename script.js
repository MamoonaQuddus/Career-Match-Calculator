window.onload= function(){
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateCareer);
    
    let closePopup = document.getElementById("close-popup");
    closePopup.addEventListener("click", () => {
        document.getElementById("result-popup").style.display = "none";
    });

    // Close the popup when clicking outside of the content
    window.addEventListener("click", (event) => {
        let popup = document.getElementById("result-popup");
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
};

function calculateCareer() {
    let yourName = document.getElementById("your-name").value;
    let friendName = document.getElementById("Friend-name").value;

    if (yourName !== "" && friendName !== "") {
        let percentage = Math.floor(Math.random() * 101); // Generate a random percentage

        // Update popup content
        document.getElementById("popup-message").innerText = `${yourName} and ${friendName}'s chances of making a great startup duo in tech!`;
        document.getElementById("popup-percentage").innerText = `${percentage}%`;

        // Show the popup
        document.getElementById("result-popup").style.display = "flex";
    } else {
        alert("Please enter both names!");
    }
}

