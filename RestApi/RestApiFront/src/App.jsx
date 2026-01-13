import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreatePost from "./Component/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Component/Detail";
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
    <BrowserRouter>
      <div className="min-h-screen bg-gray-300 px-4 py-6 rounded-2xl">

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* LEFT POSTS */}
                <div className="lg:col-span-2">
                  <h1 className="text-3xl font-bold text-center text-red-950 mb-2">
                    Quora Posts
                  </h1>

                  <div className="space-y-6">
                    {apidata.map((data, index) => (
                      <div
                        key={index}
                        className="bg-white p-5 rounded-xl shadow-md"
                      >
                        <h3 className="font-semibold">@{data.username}</h3>

                        <div className="flex justify-between">
                          <p>{data.content}</p>

                          {/* ✅ Link */}
                          <Link
                            to="/detail"
                            className="text-blue-600 hover:text-blue-700 hover:font-semibold underline"
                          >
                            detail
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT CREATE POST */}
                <div className="lg:sticky lg:top-6 h-fit">
                  <CreatePost />
                </div>

              </div>
            }
          />

          {/* DETAIL PAGE */}
          <Route path="/Detail" element={<Detail />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


