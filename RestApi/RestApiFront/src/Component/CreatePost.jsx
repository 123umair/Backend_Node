function CreatePost() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-red-950 mb-6 text-center">
          Create New Post
        </h1>

        {/* Form */}
        <form className="space-y-4" action="http://localhost:4000/posts" method='post'>
          <input
            type="text"
            placeholder="enter username"
            name="username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
          />

          <textarea
            placeholder="write your post"
            name="content"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-900"
          ></textarea>

          <button
            type="Submit"
            className="w-full bg-red-950 text-white py-3 rounded-lg hover:bg-red-900 transition"
          >
            Post
          </button>
        </form>

      </div>
    </div>
  );
}

export default CreatePost;
