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
        "Cybersecurity": "https://1drv.ms/b/c/a38434d5016eaac9/IQCVRk6TAEu2Tos_16BKnWsKATvUYY7xOVgctzf3JVJfk0I?e=rMNO0t",
        "OperatingSystem": "https://1drv.ms/b/c/a38434d5016eaac9/IQAfE9_aSBQyS7jUZiZ6dqaNAbQXM1WgcmbYMEvRLScZuY0?e=zgY3IF",        // Fixed placeholder
        "DataMining": "https://1drv.ms/b/c/a38434d5016eaac9/IQA6BAKiqkN0Q40VGDKrfblyAfuofM9cDWkInyv9n1HYeZE?e=MWZWVq"     // Fixed placeholder
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
