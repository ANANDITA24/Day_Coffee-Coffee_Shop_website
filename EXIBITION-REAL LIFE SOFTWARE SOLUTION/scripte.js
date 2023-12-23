

function submitOrder() {
    // Form validation
    const name = document.getElementById('name').value;
    const pickupTime = document.getElementById('pickup-time').value;
    const phone = document.getElementById('phone').value;

    if (name.trim() === '' || pickupTime.trim() === '' || phone.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Check if the phone number has exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    // In a real scenario, this is where you would send a message to the customer
    alert("Order submitted successfully! You will receive a confirmation message shortly.");
}





 function scrollToPickupSection() {
            // Get the target element (Pick-up Order section)
            var targetElement = document.getElementById('pickup-section');

            // Scroll to the target element
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }