


import useFetch from '../useFetch';
import { useState, useEffect } from "react";

import DoctorGrid from './DoctorGrid';

import Nav from '../Nav';

const DoctorPage = () => {
     
    const {
        data: Doctor,
        isPending,
        error,
      } = useFetch("http://localhost:4000/DoctorPosts");

    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [organization,setOrganization] = useState("");
    const [specialty,setSpecialty] = useState("");
      
  return (
    <div className='DoctorPage'>
      <Nav />
      <div className="content">
        <div className='postHeadlines'>
         <h2>Medical Cases</h2>

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
              <label>filter by specialty:</label>
              <select
                value={specialty}
                onChange={(e) => {
                  setSpecialty(e.target.value);
                  console.log("the specialty is", e.target.value);
                }}
              >
                <option value="">All</option>
                <option value={"Surgery"}>Surgery</option>
                <option value={"Neurology"}>Neurology</option>
                <option value={"Psychiatry"}>Psychiatry</option>
                <option value={"Pathology"}>Pathology</option>

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
              <label>filter by organization:</label>
              <select
                value={organization}
                onChange={(e) => {setOrganization(e.target.value)
                  console.log('the chosen organization', season);
                }}
              >
                <option value="">All</option>
                <option value="hospital1">hospital1</option>
                <option value="hospital2">hospital2</option>
                <option value="hospital3">hospital3</option>
                <option value="hospital4">hospital4</option>
              </select>
           
          </div>

         </div>
        
      </div>
      
      {/* <Posts items={items} handleButtonClick={handleButtonClick} />    */}
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Doctor && (
      
      <DoctorGrid  
      crads={Doctor.filter(
        (item) =>
        (specialty === "" || item.specialty === specialty) &&
        (governorate === "" || item.governorate === governorate) &&
        (organization === "" || item.organization === organization) &&
        (area === "" || area === item.area)
      )}
      />

      // <Posts
      //   title="All Blogs!!"
      //   blogs={blogs} handleDelete={handleDelete}
      //   handleButtonClick={handleButtonClick}
      // />
    )}
    </div>
  );
}

 
export default DoctorPage;






