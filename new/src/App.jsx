import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { filterdata, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category,setcategory]=useState(filterdata[0].title);


  async function fetchdata() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network mai koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (

    <div className="min-h-screen  bg-gray-300 flex  flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterdata={filterdata} category={category} setcategory={setcategory}></Filter>
      </div>

    <div className="w-11/12  flex  flex-wrap max-w-[1200px] min-h-[50vh] space-x-4 gap-y-4 mx-auto py-4  justify-center">
       {loading ? <Spinner /> : <Cards courses={courses} category={category} />}</div>
    </div>

  );
}

export default App;
