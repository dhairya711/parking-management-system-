const paymentMethod = document.getElementById('paymentMethod');
const upiIdGroup = document.getElementById('upiIdGroup');
const cardDetailsGroup = document.getElementById('cardDetailsGroup');
const expiryDetailsGroup = document.getElementById('expiryDetailsGroup');
const cvvDetailsGroup = document.getElementById('cvvDetailsGroup');
const proceedButton = document.getElementById('proceedButton');
const popup = document.getElementById('popup');
const popupMessage = document.getElementById('popupMessage');

// Toggle form fields based on selected payment method
paymentMethod.addEventListener('change', function () {
    if (this.value === 'UPI') {
        upiIdGroup.style.display = 'block';
        cardDetailsGroup.style.display = 'none';
        expiryDetailsGroup.style.display = 'none';
        cvvDetailsGroup.style.display = 'none';
    } else if (this.value === 'Debit' || this.value === 'Credit') {
        upiIdGroup.style.display = 'none';
        cardDetailsGroup.style.display = 'block';
        expiryDetailsGroup.style.display = 'block';
        cvvDetailsGroup.style.display = 'block';
    }
});

// Simulate transaction process
proceedButton.addEventListener('click', function () {
    const selectedMethod = paymentMethod.value;

    if (selectedMethod === 'UPI') {
        const upiId = document.getElementById('upiId').value;
        if (!upiId) {
            alert('Please enter a valid UPI ID');
            return;
        }
    } else if (selectedMethod === 'Debit' || selectedMethod === 'Credit') {
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        // Validate card number length
        if (cardNumber.length !== 16) {
            alert('Card number must be exactly 16 digits.');
            return;
        }

        // Validate CVV length
        if (cvv.length !== 3) {
            alert('CVV must be exactly 3 digits.');
            return;
        }

        if (!cardNumber || !expiryDate || !cvv) {
            alert('Please enter valid card details');
            return;
        }
    }

    // Simulate success or failure
    const transactionSuccess = Math.random() > 0.5; // Random success/failure
    showPopup(transactionSuccess);
});

// Show the popup with success or failure message
function showPopup(isSuccess) {
    popup.style.display = 'block';
    if (isSuccess) {
        popup.classList.add('success');
        popup.classList.remove('failure');
        popupMessage.textContent = 'Transaction Completed Successfully!';
    } else {
        popup.classList.add('failure');
        popup.classList.remove('success');
        popupMessage.textContent = 'Transaction Failed!';
    }
}

// Close the popup
function closePopup() {
    popup.style.display = 'none';
}
