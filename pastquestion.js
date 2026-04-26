 window.onload = function() {
      document.getElementById("questionModal").style.display = "block";
    };

    function closeModal() {
      document.getElementById("questionModal").style.display = "none";
    }

    // Download handler (update these links with real PDF URLs)
    function downloadQuestion(paperName) {
      const pdfLinks = {
        "DSA": "https://binayapokhrel.com.np/pdfs/see-dsa-2081.pdf",   // ← Change this
        "Cybersecurity": "https://binayapokhrel.com.np/pdfs/neb-cyber-2082.pdf",
        "Operating System": "https://binayapokhrel.com.np/pdfs/neb-cyber-2082.pdf",
        "DataMining": "https://binayapokhrel.com.np/pdfs/neb-cyber-2082.pdf"
      };

      const link = pdfLinks[paperName];
      
      if (link && link !== "https://binayapokhrel.com.np/...") {
        window.open(link, '_blank');
      } else {
        alert(`Downloading ${paperName}...\n\n(Please replace placeholder links with real PDF URLs)`);
      }
    }

    // Close modal when clicking outside the content
    window.onclick = function(event) {
      const modal = document.getElementById("questionModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };