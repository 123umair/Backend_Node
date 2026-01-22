import React from "react";

export const Editpost = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">
        
        {/* Heading */}
        <h1 className="text-2xl font-bold text-red-950 text-center mb-6">
          Edit Post
        </h1>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Username (optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-red-900"
            />
          </div>

          {/* Post Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Post Content
            </label>
            <textarea
              rows="5"
              placeholder="Edit your post here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none
                         focus:outline-none focus:ring-2 focus:ring-red-900"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 rounded-lg bg-red-950 text-white
                         hover:bg-red-900 transition"
            >
              Update Post
            </button>

            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 rounded-lg border border-red-950
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
