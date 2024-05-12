import useFetch from '../useFetch';
import { useState, useEffect } from "react";
import Nav from '../Nav';

import MedicalGrid from './MedicalGrid';






function MedicalDonationPage() {  
const {
  data: Supplies,
  isPending,
  error,
} = useFetch("http://localhost:4000/MedicalPosts");
  


const handleDelete = (id) => {
  const newBlogs = blogs.filter((blog) => blog.id !== id);
  setBlogs(newBlogs);
  }
return (
  <div className="MedicalDonationPage">
    <Nav />
  
    <div className="content">
         <div className='postHeadlines'>
          <h2>Posts</h2>
       </div>
       </div>
    {error && <div>{error}</div>}
    {isPending && <p>loading.... </p>}
    {Supplies && (
      <MedicalGrid  crads = {
        Supplies
      }/>


    )}
    
  </div>
);
}

export default MedicalDonationPage;





