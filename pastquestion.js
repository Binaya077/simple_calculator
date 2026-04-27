// Show modal after 1 second when page loads
window.onload = function() {
    setTimeout(() => {
        const modal = document.getElementById("questionModal");
        if (modal) {
            modal.style.display = "flex";        // Use 'flex' for better centering
        }
    }, 1000); // 1000ms = 1 second delay
};

// Close modal function
function closeModal() {
    const modal = document.getElementById("questionModal");
    if (modal) {
        modal.style.display = "none";
    }
}

// Improved Download Handler
function downloadQuestion(paperName) {
    const pdfLinks = {
        "DSA": "https://drive.google.com/file/d/10MkglL1Z_mFZn3EHHXitBgh14-H136ma/view?usp=sharing",
        "Cybersecurity": "https://drive.google.com/file/d/1CN8kBwxj0jy1ZfLLbD_igyzsaRUa294a/view?usp=sharing",
        "OperatingSystem": "https://drive.google.com/file/d/1c9M527RWX3foLUDGnulLwcnfGjS7YMiG/view?usp=sharing",        // Fixed placeholder
        "DataMining": "https://drive.google.com/file/d/1XQRckkb6rp_J2DgFVf8QArv40jZH4kWe/view?usp=sharing"     // Fixed placeholder
    };

    const link = pdfLinks[paperName];

    if (link) {
        window.open(link, '_blank');
    } else {
        alert(`Sorry, the download link for "${paperName}" is not available yet.`);
    }
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modal = document.getElementById("questionModal");
    if (event.target === modal) {
        closeModal();
    }
};
