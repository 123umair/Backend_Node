import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CreatePost from "./Component/CreatePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Component/detail";
import './App.css'
import { Editpost } from "./Component/Editpost";

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/posts/${id}`);
      setApiData(prev =>
        prev.filter(post => post.id !== id)
      );
    } catch (err) {
      console.log(err)
    }

  }

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

                        <div className="flex flex-col">
                          <p>{data.content}</p>

                          <div className="flex flex-start gap-3 ">
                            {/* ✅ Link */}
                            <Link
                              to={`/detail/${data.id}`} //  to is a point to this route ... /detial/:id here goes the post id here to the backend node 
                              className="text-blue-600 hover:text-blue-700 hover:font-semibold underline"
                            >
                              detail
                            </Link>
                            {/* ✅ Link */}
                            <Link
                              to={`/detail/${data.id}/edits`} //  to is a point to this route ... /detial/:id here goes the post id here to the backend node 
                              className="text-blue-600 hover:text-blue-700 hover:font-semibold underline"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDelete(data.id)}
                              className="bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white"
                            >
                              delete
                            </button>
                          </div>
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
          <Route path={`/detail/:id`} element={<Detail />} />
          <Route path={`/detail/:id/edit`} element={<Editpost />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


