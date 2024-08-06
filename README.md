**Project : Academic Doubts**

**Objective:**
Create an automated system for students to submit academic doubts and receive responses through email using the Gemini API.

**Components:**

1. **Data Submission:**
   - **Frontend:** Develop a React form to collect up to 5 academic doubts from students.
   - **Backend Integration:** Collect the form responses in a Google Sheet.

2. **API Integration:**
   - **Gemini API:** Use the API to analyze and respond to the submitted doubts. It should either provide answers or generate progress reports based on mentors' feedback.
   - **Google Sheets Update:** Store the API responses or generated reports in the Google Sheet.

3. **Forwarding Answers via Email:**
   - **Email Integration:** Automatically send the generated answers or reports to the student's email address provided in the form.

**React Form Code Overview:**

- **State Management:** Handles form data and loading state with `useState`.
- **Form Validation:** Uses a `validate` function to ensure data integrity before submission.
- **API Interaction:** Submits form data to a specified URL using `axios`, and handles responses with notifications (`toast`).
- **Form Structure:** Includes fields for personal information (name, gender, phone number, email) and up to 5 doubts. Provides real-time validation feedback.

**Implementation Details:**

1. **Form Fields:** 
   - Personal information: First name, Last name, Gender, Mobile, Email
   - Doubts: Up to 5 text areas for student doubts.

2. **Submission Handling:**
   - Uses `axios` to post form data to a Google Apps Script URL.
   - Handles errors and success notifications.

3. **UI Components:**
   - Includes form elements for input and validation errors.
   - Displays submission status with loading indicators.

Certainly! Here’s a detailed description of the UI for the **Academic Doubts** project, focusing on a user-friendly interface:

### **UI Design for Academic Doubts Form**

**1. Layout and Structure:**
   - **Header:**
     - Title: "Academic Form" prominently displayed at the top center of the page.
   - **Form Sections:**
     - **Personal Info Section**
     - **Doubts Section**
     - **Submit Button**

**2. Form Components:**
   - **Personal Information:**
     - **First Name:** Input field with placeholder "Enter your first name".
     - **Last Name:** Input field with placeholder "Enter your last name".
     - **Gender:** Dropdown select with options: Male, Female, Other.
     - **Phone Number:** Input field with placeholder "123-456-7890".
     - **Email:** Input field with placeholder "Enter your email address".
   - **Doubts:**
     - **Doubt 1 to 5:** Textarea fields for students to enter their doubts, with placeholders indicating optional or required fields.
   - **Terms and Conditions:**
     - **Checkbox:** A checkbox to agree to terms and conditions with a label.

**3. Error Handling:**
   - **Error Messages:** Display validation errors below each relevant input field in red text.

**4. Submit Button:**
   - **Button Text:** "Send" or "Submitting..." (while the form is being processed).
   - **Button State:** Disabled when loading to prevent multiple submissions.

**5. Visual Design:**
   - **Container:** Centered on the page with a responsive design for different screen sizes.
   - **Form Styling:** 
     - Use Bootstrap or similar for consistent styling.
     - Background color and card styling to make the form visually appealing.
     - Spacing and margins to ensure elements are well-separated and readable.

**6. Responsive Design:**
   - Ensure that the form adjusts gracefully to different screen sizes, especially for mobile devices.

**Example Code Snippet:**

```jsx
const Form = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    First_name: "",
    Last_name: "",
    Gender: "",
    Mobile: "",
    Email: "",
    Doubt1: "",
    Doubt2: "",
    Doubt3: "",
    Doubt4: "",
    Doubt5: ""
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        const response = await axios.post("YOUR_URL_HERE", formData);
        toast.success("Form submitted successfully");
        setFormData({
          First_name: "",
          Last_name: "",
          Gender: "",
          Mobile: "",
          Email: "",
          Doubt1: "",
          Doubt2: "",
          Doubt3: "",
          Doubt4: "",
          Doubt5: ""
        });
        setErrors({});
      } catch (error) {
        toast.error("Error submitting form");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields here */}
    </form>
  );
};
```
**UI design Accedmic form**
![UI design Accedmic form](./src/Image/Academic%20Doubts%20Form.png)