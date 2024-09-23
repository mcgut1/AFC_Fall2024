
//Validation for the Form
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate First Name and print (Required)
        const firstName = document.getElementById('firstName');
        if (firstName.value.trim() === '') {
            alert('First Name is required.');
            isValid = false;
        } else {
            console.log('First Name: ', firstName.value);
        }
        
        // Validate Last Name and print (Optional)
        const lastName = document.getElementById('lastName');
        console.log('Last Name: ', lastName.value);

        // Validate Address and print (Required)
        const address1 = document.getElementById('address1');
        if (address1.value.trim() === '') {
            alert('Address is required.');
            isValid = false;
        } else {
            console.log("Address1: ", address1.value);
        }
        

        // Validate City and print (Required)
        const city = document.getElementById('city');
        if (city.value.trim() === '') {
            alert('City is required.');
            isValid = false;
        } else {
            console.log("City: ", city.value);
        }

        // Validate State and print (Required)
        const state = document.getElementById('state');
        if (state.value === '') {
            alert('State is required.');
            isValid = false;
        } else {
            console.log("State: ", state.value);
        }

        // Validate Age and print (Required)
        const age = document.getElementById('age');
        if (age.value < 21 || age.value > 99) {
            alert('Age must be between 21 and 99.');
            isValid = false;
        } else {
            console.log("Age: ", age.value);
        }

        // Validate Phone Number and print (Required)
        const phone = document.getElementById('phone');
        const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phonePattern.test(phone.value)) {
            alert('Phone number must be in the format 111-222-3333.');
            isValid = false;
        } else {
            console.log("Phone Number: ", phone.value);
        }

        // Validate Email and print (Required)
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value) || !email.value.endsWith('@example.com')) {
            alert('Email must be in the format example@example.com.');
            isValid = false;
        } else {
            console.log("Email: ", email.value);
        }

        // Validate Password and print (Required)
        const password = document.getElementById('password');
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;
        if (!passwordPattern.test(password.value)) {
            alert('Password must be between 8 and 12 characters long and contain at least one number, one uppercase letter, and one lowercase letter.');
            isValid = false;
        } else {
            console.log("Password: ", password.value);
        }

        // Validate Marital Status and print
        const maritalStatus = document.querySelector('input[name="maritalStatus"]:checked');
        if (!maritalStatus) {
            alert('Please select your marital status.');
            isValid = false;
        } else {
            console.log("Marital Status", maritalStatus.value);
        }
        textarea.addEventListener('input', () => {
            const charLength = textarea.value.length;
            
            // Update the character count
            charCount.textContent = charLength;
            
            // Check for 300 character 
            if (charLength > 300) {
                textarea.value = textarea.value.substring(0, 300);

        if (!isValid) {
            event.preventDefault();
        }
            }})})})
