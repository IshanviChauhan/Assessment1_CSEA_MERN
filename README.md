# Assessment1_CSEA_MERN : Resume Builder
This project is a simple and interactive Resume Builder application developed using HTML, CSS, and JavaScript. It allows users to create a personalized resume by filling out a form with essential information and then previewing it in a structured format. The tool also provides an option to download the resume as a PDF.

**GitHub Deployement Link :** https://ishanvichauhan.github.io/Assessment1_CSEA_MERN/
**Netlify Deployment Link :** https://mern-assessment-resumebuilder.netlify.app/

## Features

1. **User Input Form**:
   - Collects user details including:
     - Name
     - Email
     - Phone
     - LinkedIn profile
     - GitHub profile
     - Work experience
     - Education
     - Profile photo

2. **Resume Preview**:

    ![image](https://github.com/user-attachments/assets/7d34a645-d94e-4a65-b68d-8a76ec4fb1ec)
   ![image](https://github.com/user-attachments/assets/53f5d97f-9c2a-404f-888f-3b0669845ee3)
   ![image](https://github.com/user-attachments/assets/e1ecd4ef-a292-4df5-888f-0ceab4e147a6)
   - Displays a live preview of the resume based on the user's input.
   - Organizes information with clearly defined sections for Contact Details, Experience, and Education.
   - Adds a profile photo, if uploaded.

4. **PDF Generation**:
   - Provides an option to download the resume in PDF format.
   - Uses the `html2pdf` library to convert the previewed resume into a downloadable PDF file.

## Technologies Used

- **HTML**: For structuring the form and the preview layout.
- **CSS**: For styling the form and preview sections to make the resume visually appealing.
- **JavaScript**: For dynamically updating the resume preview and handling PDF download functionality.

## How to Use

1. **Fill Out the Form**:
   - Enter your details in the form fields provided on the left side of the application.
   - Upload a profile photo if desired.

2. **Generate Resume**:
   - Click on the **Generate Resume** button to preview the resume with the entered information.

3. **Download Resume**:
   - If satisfied with the preview, click **Download Resume** to save it as a PDF file.

## Folder Structure

- `index.html`: Contains the structure and form for input collection and preview.
- `style.css`: Styles the form and resume preview.
- `script.js`: Handles the interactivity, updates the preview, and manages the PDF download function.
- `html2pdf.js`: A third-party library used for PDF generation.

## Requirements

- An internet connection is required to access the `html2pdf` library from the CDN.
- A web browser to run the HTML file.

## Setup Instructions

1. Clone the repository or download the files.
2. Open `index.html` in a web browser.
3. Fill out the form and generate your resume. 

## Future Enhancements

Potential features to improve user experience:
- Additional customization options (font style, color themes, layout changes).
- Options to add more sections such as skills, certifications, and projects.
- Enhanced image handling for profile photos.

Enjoy creating your personalized resume with ease!
