import FulfilledGrid from './FulfilledGrid';
import useFetch from '../useFetch';
import { useState, useEffect } from "react";

import OrganizationNav from './OrganizationNav';
import '../Navbar.css'


function FulfilledPage() {
  const {
    data: Data,
    isPending,
    error,
  } = useFetch("http://localhost:4000/FulfilledPosts");
    
  const [postType, setpostType] = useState("");
  
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
    }
  return (
    <div className="MyDonationPage">
      <OrganizationNav />
    
      <div className="content">
           <div className='postHeadlines'>
            <h2>Fulfilled Donations</h2>
            <div className="filter-logic">
                <label>filter by type:</label>
                <select
                  value={postType}
                  onChange={(e) => {
                    setpostType(e.target.value);
                    console.log("the chosen season", type);
                  }}
                >
                  <option value="">All</option>
                  <option value="Food">Food</option>
                  <option value="Toys">Toys</option>
                  <option value="School">School Suplies</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Teaching">Teaching</option>
                </select>
            </div>
         </div>
         </div>
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Data && (
        <FulfilledGrid
        crads={Data.filter(
          (item) =>
            (postType === "" || item.postType === postType)
               
        )}
      />
  
  
      )}
      
    </div>
  );
}

export default FulfilledPage;