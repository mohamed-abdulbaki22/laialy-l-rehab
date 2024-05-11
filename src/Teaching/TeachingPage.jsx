


import useFetch from '../useFetch';
import { useState, useEffect } from "react";



import Nav from '../Nav';
import TeachingGrid from './TeachingGrid';

const TeachingPage = () => {
     
    const {
        data: Teacher,
        isPending,
        error,
      } = useFetch("http://localhost:4000/TeachingPosts");

    const [area, setArea] = useState("");
    const [governorate, setGovernorate] = useState("");
    const [subject,setSubject] = useState("");
      
  return (
    <div className='TeachingPage'>
      <Nav />
      <div className="content">
        <div className='postHeadlines'>
         <h2>Teaching Opportunities</h2>

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
              <label>filter by subject:</label>
              <select
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                  console.log("the subject is", e.target.value);
                }}
              >
                <option value="">All</option>
                <option value={"CS"}>CS</option>
                <option value={"Math"}>Math</option>
                <option value={"Arabic"}>Arabic</option>
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
      
      {/* <Posts items={items} handleButtonClick={handleButtonClick} />    */}
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Teacher && (
      
      <TeachingGrid  
      crads={Teacher.filter(
        (item) =>
        (subject === "" || item.subject === subject) &&
        (governorate === "" || item.governorate === governorate) &&
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

 
export default TeachingPage;






