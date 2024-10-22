$(document).ready(function () {
    $(".profile-pic").click(function () {
        $("#dropdown").toggle();
    });
    $(window).click(function (event) {
        if (!$(event.target).closest(".profile").length) {
            $("#dropdown").hide();
        }
    });
});

isAnyButtonDisabled();

function isAnyButtonDisabled() {
    console.log('isAnyButtonDisabled');
    // Select all button elements on the page
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    // Iterate through each button to check if any are disabled
    for (let button of buttons) {
        if (button.disabled) {
            button.classList.add('btn-disabled');
            return true; // Return true if any button is found to be disabled
        }
    }
    
    return false; // Return false if no disabled button is found
}

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.getElementById('selected-value');
    
    function updateClass() {
        const selectedValue = selectElement.innerHTML.trim(); // Added trim() to handle any extra spaces
        if (selectedValue === 'Select') {
            selectElement.classList.add('color-ccc');
            selectElement.classList.remove('color-333');
        } else {
            selectElement.classList.add('color-333');
            selectElement.classList.remove('color-ccc');
        }
    }

    // Initial call to update the class
    updateClass();

    // Set up a MutationObserver to watch for changes to the innerHTML
    const observer = new MutationObserver(updateClass);

    observer.observe(selectElement, {
        childList: true, // Watch for changes to child elements (like text changes)
        subtree: true // Watch the entire subtree, not just direct children
    });

    // Optional: If you also want to handle changes via user interaction (e.g., select element changes), add an event listener
    selectElement.addEventListener('change', updateClass);
});



document.addEventListener('DOMContentLoaded', () => {
    const selectElementPopup = document.getElementById('selected-value-popup');
    
    function updateClass() {
        const selectedValue = selectElementPopup.innerHTML.trim(); // Added trim() to handle any extra spaces
        if (selectedValue === 'Select') {
            selectElementPopup.classList.add('color-ccc');
            selectElementPopup.classList.remove('color-333');
        } else {
            selectElementPopup.classList.add('color-333');
            selectElementPopup.classList.remove('color-ccc');
        }
    }

    // Initial call to update the class
    updateClass();

    // Set up a MutationObserver to watch for changes to the innerHTML
    const observer = new MutationObserver(updateClass);

    observer.observe(selectElementPopup, {
        childList: true, // Watch for changes to child elements (like text changes)
        subtree: true // Watch the entire subtree, not just direct children
    });

    // Optional: If you also want to handle changes via user interaction (e.g., select element changes), add an event listener
    selectElementPopup.addEventListener('change', updateClass);
});



