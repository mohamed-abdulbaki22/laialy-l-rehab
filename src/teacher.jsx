import { useState } from 'react'
import './index.css'; // Import the index.css file

const Teacher = () => {
    const [flag, setFlag] = useState(false);

    const handleSubmission = () => {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        input.value = '';
      });
      // Set the flag to true
      setFlag(true);
    };
    
    return (
        <div className="teacher needs">
        <h3>volunteer as a teacher</h3>
        <input
        type="file"
        name="documents"
        placeholder="required documents"
        
        />
       
       {/* <button onClick={() => window.open('https://maps.app.goo.gl/EfEcN86G1SNsmbLGA', '_blank')}>
        Visit the Location
       </button> */}
       <p>subjects you willing to teach</p>
       <input
        type="text"
        name="subjects"

        />
        <p>number of pro-bono classes you can give</p>
        <input
        type="text"
        name="number of classes"
        
        />
        <p>number of students to tutor</p>
        <input
        type="text"
        name="number of students"
        
        />
        <button onClick={handleSubmission}>
          Submit
        </button>
        
        </div>
        
      );
}
 
export default Teacher;
