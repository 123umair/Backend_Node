import { useState, useEffect } from "react";
import axios from "axios";
import CreatePost from "./Component/CreatePost";
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
    <div className="min-h-screen bg-gray-300 px-4 py-6 rounded-2xl">
      
      {/* Main Responsive Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT: Posts Section */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-950 mb-2">
            Quora Posts
          </h1>
          <h2 className="text-center text-gray-600 mb-6">
            This is post data
          </h2>

          <div className="space-y-6">
            {apidata.map((data, index) => (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-red-950 mb-1">
                  @{data.username}
                </h3>
                <div className="flex justify-between">
                  
                <p className="text-gray-700 leading-relaxed">
                  {data.content}
                </p>
                <a href="/detail" className="text-blue-600">detail</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Create Post Form */}
        <div className="lg:sticky lg:top-6 h-fit">
          <CreatePost />
        </div>

      </div>
    </div>
  );
}

export default App;
