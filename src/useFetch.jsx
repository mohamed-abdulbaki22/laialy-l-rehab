import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //   const [name, setName] = useState('Abdulbaki');
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  useEffect(() => {
    const aborCont = new AbortController();
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            // error coming back from server
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
          console.log(data);
          setError(null);
        })
        .catch((err) => {
          // auto catches network / connection error
          if (err.name === "AbortError") console.log("fetch aborted");
          else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => aborCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
