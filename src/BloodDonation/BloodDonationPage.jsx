import useFetch from '../useFetch';
import { useState, useEffect } from "react";
import Nav from '../Nav';

import BloodGrid from './BloodGrid';






function BloodDonationPage() {
  const {
    data: Blood,
    isPending,
    error,
  } = useFetch("http://localhost:4000/BloodPosts");

  const [area, setArea] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [hospital,setHospital] = useState("");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="BloodDonationPage">
      <Nav />

      <div className="content">
        <div className='postHeadlines'>
          <h2>Blood Donations</h2>

          <div className="filter-logic">
              <label>filter by area:</label>
              <select
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  console.log("the chosen area", area);
                }}
              >
                <option value="">All</option>
                <option value="Al tagamo3">Al tagamo3</option>
                <option value="suez-canal">suez-canal</option>
                <option value="sidy gaber">sidy gaber</option>
                <option value="m3adi">m3adi</option>
                <option value="october">october</option>
              </select>
              <label>filter by hospital:</label>
              <select
                value={hospital}
                onChange={(e) => {
                  setHospital(e.target.value);
                  console.log("the hospital group is", e.target.value);
                }}
              >
                <option value="">All</option>
                <option value={"hospital1"}>hospital1</option>
                <option value={"hospital2"}>hospital2</option>
                <option value={"hospital3"}>hospital3</option>
                <option value={"hospital4"}>hospital4</option>
                <option value={"hospital5"}>hospital5</option>
                <option value={"other"}>other hospitals</option>
              </select>
              <label>filter by governorate:</label>
              <select
                value={governorate}
                onChange={(e) => {setGovernorate(e.target.value)
                  console.log('the chosen governorate', season);
                }}
              >
                <option value="">All</option>
                <option value="cairo">cairo</option>
                <option value="other">other governorates</option>
              </select>
           
          </div>

        </div>
      </div>
      {error && <div>{error}</div>}
      {isPending && <div className="loader">
          <l-waveform
            size="35"
            stroke="3.5"
            speed="1"
            color="black"
          ></l-waveform>
        </div>}
      {Blood && (
        <BloodGrid 
        crads={Blood.filter(
          (item) =>
            (hospital === "" || item.hospital === hospital) &&
            (governorate === "" || item.governorate === governorate) &&
            (area === "" || area === item.area)
        )}
         />


      )}

    </div>
  );
}

export default BloodDonationPage;





