import { useState } from 'react'
import './index.css'; // Import the index.css file

const Teacher = () => {
    const [flag, setFlag] = useState(false);

    // const handleFileChange = (e) => {
    //   const file = e.target.files[0];
    //   localStorage.setItem('teacherFile', JSON.stringify(file));
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
      
      //window.location.href='/FirstPage'

    };
    
    return (
        <div className="teacher needs">
        <h3>volunteer as a teacher</h3>
        <p>teacher documents</p>
        <input
        type="file"
        name="documents"
        placeholder="required documents"
        // onChange={handleFileChange}
        //required
        />
        {/* <button onClick={() => downloadFile('teacher')}>
          Download Teacher Document
        </button> */}
       
       {/* <button onClick={() => window.open('https://maps.app.goo.gl/EfEcN86G1SNsmbLGA', '_blank')}>
        Visit the Location
       </button> */}
       <p>subjects you willing to teach</p>
       <input
        type=""
        name="subjects"

        />
        <p>number of pro-bono classes you can give</p>
        <input
        type="number"
        name="number of classes"
        placeholder='classes number'
        
        />
        <p>number of students to tutor</p>
        <input
        type="number"
        name="number of students"
        placeholder="students number"
        
        />
        <button onClick={handleSubmission}>
          Submit
        </button>
        
        </div>
        
      );
}
 
export default Teacher;