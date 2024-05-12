import { useState } from "react";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

const DonationDetails = () => {
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
      <Nav />
      <div className="create">
        <form onSubmit={handleSubmit}>
          <h2 className="heading">Finish Your Donation Details</h2>
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
          <label>Choose Transportation Method:</label> {/* Fixed typo here */}
          <select
            required
            value={transportation}
            onChange={(e) => setTransportation(e.target.value)}
          >
            <option value="">Not Selected</option>
            <option value="motorcycle">Motorcycle</option>
            <option value="car">Car</option>
            <option value="truck">Truck</option>
          </select>
          <button type="submit">Submit</button> {/* Changed button type to submit */}
          <button type="cancel" onClick={() =>
            window.location.href="/"}> Cancel</button>
        </form>
        
      </div>
    </div>
  );
};

export default DonationDetails;
