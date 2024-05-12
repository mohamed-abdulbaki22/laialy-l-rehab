import useFetch from '../useFetch';
import { useState, useEffect } from "react";
import Nav from '../Nav';
import AdminNav from '../AdminNav';
import DonorListGrid from './DonorListGrid';






function DonorListPage() {
  const {
    data: Donor,
    isPending,
    error,
  } = useFetch("http://localhost:4000/DonorListPosts");


  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="DonorListPage">
      <AdminNav />

      <div className="content">
        <div className='postHeadlines'>
          <h2>Donor List</h2>
        </div>
      </div>
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Donor && (
        <DonorListGrid 
        crads={Donor}
         />


      )}

    </div>
  );
}

export default DonorListPage;





