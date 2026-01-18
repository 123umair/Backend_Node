import axios from "axios";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
const Detail = () => {
    const [post, setPost] = useState(null)
    const { id } = useParams(); // 👈 URL se id
    useEffect(() => {
        const getPost = async () => {
            const response = await axios.get(
                `http://localhost:4000/posts/:${id}`
            );
            console.log('data', response.data.posts)
            setPost(response.data.post);
        };

        getPost();
    }, [id]);

    if (!post) {
        return <p className="p-10">Loading...</p>;
    }

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Post Detail Page</h1>
            <h2 className="text-xl font-semibold text-red-950">
                @{post.username}
            </h2>
            <p className="mt-2 text-gray-700">{post.content}</p>
        </div>
    );
};

export default Detail;
