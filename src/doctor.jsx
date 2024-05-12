import { useState } from 'react'
import './index.css'; // Import the index.css file

const Doctor = () => {
    const [flag, setFlag] = useState(false);

    // const handleFileChange = (e) => {
    //   const file = e.target.files[0];
    //   localStorage.setItem('doctorFile', JSON.stringify(file));
    // };

    // const downloadFile = (fileType) => {
    //   const storedFile = JSON.parse(localStorage.getItem(`${fileType}File`));
    //   if (storedFile) {
    //     const blob = new Blob([storedFile], { type: storedFile.type });
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = `${fileType}Document.${storedFile.type.split('/')[1]}`;
    //     document.body.appendChild(a);
    //     a.click();
    //     window.URL.revokeObjectURL(url);
    //   }
    // };

    const handleSubmission = () => {
      // Clear all input fields
      document.querySelectorAll('input').forEach(input => {
        input.value = '';
      });
      // Set the flag to true
      setFlag(true);
      //------------------------the redirection--------------------------
      window.location.href='/'

    };
    
    return (
        <div className="doctor needs">
        <h3>volunter as a doctor</h3>
        <p>doctor documents</p>
        <input
        type="file"
        name="documents"
        placeholder="required documents"
        // onChange={handleFileChange}
        //required
        />
        {/* <button onClick={() => downloadFile('doctor')}>
          Download Doctor Document
        </button> */}
        <p>your speciality</p>
        <input
        type="text"
        name="speciality"
        placeholder='speciality'
        
        />
        <p>number of pro-bono cases you can take on</p>
        <input
        type="number"
        name="cases"
        placeholder='cases number'
        
        />
       <h3>location</h3>
        {/* put here the map input  */}
       <input
       type="url"
       name="website"
       placeholder="Enter website URL"
       />
        <button onClick={handleSubmission}>
          Submit
        </button>
        
        {/* {flag && (
        <button onClick={() => window.open('https://maps.app.goo.gl/EfEcN86G1SNsmbLGA', '_blank')}>
          Visit the Location
        </button>
        )} */}
        <button></button>
        </div>
        
      );
}
 
export default Doctor;