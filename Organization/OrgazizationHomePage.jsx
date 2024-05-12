import OrganizationGrid from './OrganizationGrid';
import useFetch from '../useFetch';
import { useState, useEffect } from "react";

import OrganizationNav from './OrganizationNav';
import '../Navbar.css'


function OrgazizationHomePage() {
  const {
    data: Data,
    isPending,
    error,
  } = useFetch("http://localhost:4000/myposts");
    
  const [type, setType] = useState("");
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    }
  return (
    <div className="MyDonationPage">
      <OrganizationNav />
    
      <div className="content">
           <div className='postHeadlines'>
            <h2>My Donations</h2>
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
                  <option value="fruit">fruits</option>
                  <option value="vegetables">vegetables</option>
                  <option value="canned">canned foods</option>
                  <option value="fresh meals">fresh meals</option>
                  <option value="baked goods">baked goods</option>
                  <option value="cereal">cereal</option>
                </select>
            </div>
         </div>
         </div>
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Data && (
        <OrganizationGrid
        crads={Data.filter(
          (item) =>
            item.type.includes(type) 
               
        )}
      />
  
  
      )}
      
    </div>
  );
}

export default OrgazizationHomePage;










 








