import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        // Fetch blog post data based on the slug
        // Example: fetch(`/api/posts/${slug}`)
        // .then(response => response.json())
        // .then(data => setPost(data));
    }, [slug]);

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Post;
