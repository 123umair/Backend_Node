import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const Editpost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(null);
  const [content, setContent] = useState("");

  // 🔹 Get old post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/posts/${id}/edit`
        );
        setEdit(res.data.post);
        setContent(res.data.post.content);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [id]);

  // 🔹 Submit PATCH
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(
        `http://localhost:4000/posts/${id}/edit`,
        { content }
      );

      alert("Post updated successfully ✅");
      navigate("/"); // home page
    } catch (err) {
      console.log(err);
    }
  };

  if (!edit) {
    return <p className="p-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">

        <h1 className="text-2xl font-bold text-red-950 text-center mb-6">
          Edit Post
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Username (read-only) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={edit.username}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Post Content
            </label>
            <textarea
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg resize-none
                         focus:outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-red-950 text-white
                         hover:bg-red-900 transition"
            >
              Update Post
            </button>

            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded-lg border border-red-950
                         text-red-950 hover:bg-red-50 transition"
            >
              Cancel
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
