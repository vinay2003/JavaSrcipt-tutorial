const form = document.getElementById("bmi-form");
const result = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const feet = parseFloat(form.feet.value);
    const inches = parseFloat(form.inches.value);
    const weight = parseFloat(form.weight.value);

    // Validations
    if (isNaN(feet) || isNaN(inches)) {
        result.innerHTML = "Please enter valid height values.";
        return;
    }

    if (feet < 0 || inches < 0) {
        result.innerHTML = "Height cannot be negative.";
        return;
    }

    if (inches >= 12) {
        result.innerHTML = "Inches should be less than 12.";
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight.";
        return;
    }

    // Calculate BMI
    const totalInches = (feet * 12) + inches;
    const heightMeters = totalInches * 0.0254;
    const bmi = (weight / (heightMeters * heightMeters)).toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = 'Underweight';
        result.classList.add('text-blue-500');
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        result.classList.add('text-green-500');
    } else if (bmi < 29.9) {
        category = 'Overweight';
        result.classList.add('text-yellow-500');
    } else {
        category = 'Obesity';
        result.classList.add('text-red-500');
    }

    result.innerHTML = `Your BMI is ${bmi} (${category})`;
});
