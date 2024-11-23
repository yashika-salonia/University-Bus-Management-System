fetch('login.php', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => {
    console.log('Server response:', data); // Add this line for debugging
    if (data.success) {
        window.location.href = '/HomePage/index1.html';
    } else {
        errorMessage.textContent = data.message || 'Invalid login details';
        errorMessage.style.display = 'block';
    }
})