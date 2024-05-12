import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import Nav from "../Nav";

import MedicalGrid from "./MedicalGrid";

function MedicalDonationPage() {
  const {
    data: Supplies,
    isPending,
    error,
  } = useFetch("http://localhost:4000/MedicalPosts");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const [type,setType] = useState('');
  return (
    <div className="MedicalDonationPage">
      <Nav />

      <div className="content">
        <div className="postHeadlines">
          <h2 className="heading">Medical Supplies Donation</h2>
          <div className="filter-logic">
            <label>filter by type:</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                console.log("the chosen season", type);
              }}
            >
              <option value="">All</option>
              <option value="medication">medication</option>
              <option value="medical equipment">medical equipment</option>
              <option value="medical devices">medical devices</option>
            </select>
          </div>
        </div>
      </div>
      {error && <div>{error}</div>}
      {isPending && (
        <div className="loader">
          <l-waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
        </div>
      )}
      {Supplies && <MedicalGrid crads={Supplies.filter(
        (item) =>
          item.type.includes(type) 
             
      )}/>}
    </div>
  );
}

export default MedicalDonationPage;
