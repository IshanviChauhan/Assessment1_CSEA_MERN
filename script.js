// download resume as pdf
function downloadResume() {
    const resume = document.getElementById('preview');
    const download = document.getElementById('download');

    download.addEventListener('click', () => {
        const options = {
            margin: 1,
            filename: 'Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };
        
        html2pdf().set(options).from(resume).save();
    });
}

function generateResume() {
    // Get input values
    document.getElementById("preview-name").textContent = document.getElementById("name").value;
    document.getElementById("preview-spanEmail").textContent = document.getElementById("email").value;
    document.getElementById("preview-spanPhone").textContent = document.getElementById("phone").value;
    document.getElementById("preview-spanLinkedin").textContent = document.getElementById("linkedin").value;
    document.getElementById("preview-spanGithub").textContent = document.getElementById("github").value;
    document.getElementById("preview-spanExperience").textContent = document.getElementById("experience").value;
    document.getElementById("preview-spanEducation").textContent = document.getElementById("education").value;

    // Display photo if uploaded
    const photoInput = document.getElementById("photo");
    const outputPhoto = document.getElementById("resume-photo");
    if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        outputPhoto.src = e.target.result;
        outputPhoto.style.display = "block";
      };
      reader.readAsDataURL(photoInput.files[0]);
    } else {
      outputPhoto.style.display = "none";
    }

    // Show the resume output
    document.getElementById("form").style.display = "none";
    document.getElementById("preview").style.display = "block";
}

