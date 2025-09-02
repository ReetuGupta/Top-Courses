import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Navbar } from "./components/Navbar";
import { Filter } from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData } from "./data";
import { apiUrl } from "./data";
import { useState, useEffect } from "react";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      //Output
      setCourses(output.data);
    } catch (error) {
      toast.error("Issue in data fetching");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen font-sans text-white flex flex-col items-center gap-5 p-5">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter
          filterData={filterData}
          setCategory={setCategory}
          category={category}
        />
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
