// wait for page to load
document.addEventListener("DOMContentLoaded", () =>{
    //Get the button from the HTML
    const button =
    document.querySelector("#contact-button");
    // Check if the button exists
    if (button) {
        button.addEventListener("click", () =>{
            alert("Thank you for visiting my profile")
        });
    }
});


