import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import { PortableText } from '@portabletext/react';
const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true, // Use the Content Delivery Network for faster response times
});

const Post = () => {
    // Extract the slug from the URL
    const slug = window.location.pathname.split('/update/')[1];
    console.log(slug);

    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await client.fetch(`*[_type == "update" && slug.current == "${slug}"]`);
                if (response.length > 0) {
                    setPost(response[0]); // Assuming slug is unique and only one post is returned
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            }
        };
        fetchBlogs();
    }, [slug]);

    if (!post) {
        return <div>No Post Found</div>;
    }

    return (
        <div>
            <h1>{post.name}</h1>
            <PortableText
                value={post.content}
                
            />
        </div>
    );
};

export default Post;
