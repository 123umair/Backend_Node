import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:4000/posts/${id}`
                );

                console.log("data", response.data.post);
                setPost(response.data.post);
            } catch (error) {
                console.error(error);
            }
        };

        getPost();
    }, [id]);

    if (!post) {
        return <p className="p-10">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl sm:text-2xl font-bold text-red-950">
                        Post Details
                    </h1>
                    <span className="text-sm text-gray-500">
                        #{post.id}
                    </span>
                </div>

                {/* User */}
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-full bg-red-950 text-white flex items-center justify-center font-bold text-lg">
                        {post.username.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            @{post.username}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Posted just now
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5">
                    <p className="text-gray-700 leading-relaxed wrap-break-words">
                        {post.content}
                    </p>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button className="w-full sm:w-auto px-6 py-2 rounded-lg bg-red-950 text-white hover:bg-red-900 transition">
                        Edit
                    </button>
                    <button className="w-full sm:w-auto px-6 py-2 rounded-lg border border-red-950 text-red-950 hover:bg-red-50 transition">
                        Delete
                    </button>
                </div>

            </div>
        </div>
    );


};

export default Detail;
