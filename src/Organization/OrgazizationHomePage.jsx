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
    
 const [postType, setPostType] = useState(""); 
  
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
                  value={postType}
                  onChange={(e) => {
                    setPostType(e.target.value);
                    console.log("the chosen season", type);
                  }}
                >
                  <option value="">All</option>
                  <option value="Food">Food</option>
                  <option value="Toys">Toys</option>
                  <option value="School">School Spplies</option>
                  <option value="Blood">Blood</option>
                  <option value="Medical">baked Supplies</option>
                  <option value="volunteer">volunteer posts</option>
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
            (postType === "" || item.postType === postType) 
               
        )}
      />
  
  
      )}
      
    </div>
  );
}

export default OrgazizationHomePage;










 








