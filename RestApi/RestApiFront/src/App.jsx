import { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
function App() {
  const [apidata, setApiData] = useState([]);
  const url = "http://localhost:4000/";

  const getData = async () => {
    const response = await axios.get(url);
    setApiData(response.data.posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-red-950 mb-2">
        Quora Posts
      </h1>
      <h2 className="text-center text-gray-600 mb-8">
        This is post data
      </h2>

      {/* Posts */}
      <div className="max-w-3xl mx-auto space-y-6">
        {apidata.map((data, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-red-950 mb-2">
              @{data.username}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {data.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
