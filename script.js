document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const expandableContents = document.querySelectorAll('.expandable-content');
    const outputDiv = document.getElementById('output');

    //collapsing all divs
    function hideAllContents() {
        expandableContents.forEach(content => {
            content.style.display = "none";
        });
    }

    //expand div for which radio button is clicked and displaying total value
    radioButtons.forEach(radioBtn => {
        radioBtn.addEventListener("click", function () {
            if (this.checked) {
                hideAllContents();
                const contentId = this.getAttribute("data-content");
                const contentToShow = document.getElementById(contentId);
                contentToShow.style.display = "block";
                const selectedValue = this.value;
                outputDiv.textContent = `DKK ${selectedValue}`
            }
        });
    });
});
