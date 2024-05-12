import { useState } from "react";

import { useNavigate } from "react-router-dom";
import location from '../assets/location.jpg'

import OrganizationNav from "./OrganizationNav";
const DonationDropOff = () => {
  const [transportation, setTransportation] = useState("");
  const [time, setTime] = useState(null);
  const [comment, setComment] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Donated Succefully');
    navigate("/ClothesDonationPage"); // Navigate to the home page after form submission
  };

  return (
    <div className="submission-form">
      <OrganizationNav />
      <div className="create">
       
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Schedule Donation Drop-off</h2>
          <img className="map" src={location} alt="Location" />

          <label>Add your comments here:</label>
          <input
            type="text"
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <label htmlFor="datetime-picker">Choose a date and time:</label>
          <input
            type="datetime-local"
            required
            id="datetime-picker"
            name="datetime"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          
          <button type="submit">Submit</button> {/* Changed button type to submit */}
          <button type="cancel" onClick={() =>
            window.location.href="/"}> Cancel</button>
        </form>
        
      </div>
    </div>
  );
};
 
export default DonationDropOff;