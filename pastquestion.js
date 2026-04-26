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
        "DSA": "https://1drv.ms/b/c/a38434d5016eaac9/IQDWryv1ks07TqHoox4LU6ypAVnL05nFT1FpiuDTk4k3RSg?e=ldJbcM",
        "Cybersecurity": "https://binayapokhrel.com.np/pdfs/neb-cyber-2082.pdf",
        "Operating System": "https://binayapokhrel.com.np/pdfs/neb-os-2082.pdf",        // Fixed placeholder
        "DataMining": "https://binayapokhrel.com.np/pdfs/neb-datamining-2082.pdf"     // Fixed placeholder
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
