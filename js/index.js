// Hamburger Scripting
const navToggle = document.querySelector('.nav--toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () =>  {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// Other Scripting
function changeOperator() {
    let operator_element = document.getElementById('operatorbutton');
    let button_text = operator_element.textContent || operator_element.innerText;
    switch(button_text) {
        case "Add Numbers":
            operator_element.textContent = "Subtract Numbers";
            operator_element.innerText = "Subtract Numbers";
            break;
        case "Subtract Numbers":
            operator_element.textContent = "Multiply Numbers";
            operator_element.innerText = "Multiply Numbers";
            break;
        case "Multiply Numbers":
            operator_element.textContent = "Divide Numbers";
            operator_element.innerText = "Divide Numbers";
            break;
        case "Divide Numbers":
            operator_element.textContent = "Add Numbers";
            operator_element.innerText = "Add Numbers";
            break
    }
    
}

function operatorTwoNumbers() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let operator_element = document.getElementById('operatorbutton');
    let button_text = operator_element.textContent || operator_element.innerText;
    let result = 0;
    switch(button_text) {
        case "Add Numbers":
            result = parseInt(num1) + parseInt(num2);
            break;
        case "Subtract Numbers":
            result = parseInt(num1) - parseInt(num2);
            break;
        case "Multiply Numbers":
            result = parseInt(num1) * parseInt(num2);
            break;
        case "Divide Numbers":
            result = parseInt(num1) / parseInt(num2);
            break
    }
    document.getElementById('numberresult').value = result;
}