import { useState } from 'react'
import './index.css'; // Import the index.css file
import Nav from './Nav';

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
      <>
      <Nav/>
        <div className="teacher needs">
        <h2 className='heading'>Volunteer As A Teacher</h2>
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
        </>
      );
}
 
export default Teacher;
