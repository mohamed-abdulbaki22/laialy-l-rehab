import { useState } from 'react'
import './index.css'; // Import the index.css file

const Doctor = () => {
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
        <div className="doctor needs">
        <h3>volunter as a doctor</h3>
        <input
        type="file"
        name="documents"
        placeholder="required documents"
        //onChange={handleFileChange}
        //required
        />
       <h3>location</h3>
       <input
       type="url"
       name="website"
       placeholder="Enter website URL"
       />
        <button onClick={handleSubmission}>
          Submit
        </button>
        
        {flag && (
        <button onClick={() => window.open('https://maps.app.goo.gl/EfEcN86G1SNsmbLGA', '_blank')}>
          Visit the Location
        </button>
        )}
        <button></button>
        </div>
        
      );
}
 
export default Doctor;
