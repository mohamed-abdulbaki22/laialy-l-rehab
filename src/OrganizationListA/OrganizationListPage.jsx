import useFetch from '../useFetch';
import { useState, useEffect } from "react";
import Nav from '../Nav';
import AdminNav from "../AdminNav";
import OrganizationListGrid from './OrganizationListGrid';






function OrganizationListPage() {
  const {
    data: Organization,
    isPending,
    error,
  } = useFetch("http://localhost:4000/OrganizationListPosts");


  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="OrganizationListPage">
      <AdminNav />

      <div className="content">
        <div className='postHeadlines'>
          <h2>Organization List</h2>
        </div>
      </div>
      {error && <div>{error}</div>}
      {isPending && <p>loading.... </p>}
      {Organization && (
        <OrganizationListGrid 
        crads={Organization}
         />


      )}

    </div>
  );
}

export default OrganizationListPage;





