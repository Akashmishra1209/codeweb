import React, { useState, useEffect } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true, // Use the Content Delivery Network for faster response times
});

const New = (props) => {
    const [blogs, setBlogs] = useState([]);
    let TextStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    }
    let myStyle = {
        color: props.mode === 'dark' ? '#ffffff' : '#042743',
        border: props.mode === 'dark' ? 'black' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(105,105,105)' : 'white',
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await client.fetch(`*[_type == "update"]`);
                console.log('Fetched data:', response); // Log fetched data
                setBlogs(response); // Update the state with fetched blogs
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlogs();
    }, []);
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }


    // console.log('State blogs:', blogs); // Log state blogs

    return (
        <div>
            <h1 style={TextStyle} className='text-center '>All Updates</h1>
            <ul>
                {/* Map through the blogs array and render each blog post */}
                {blogs.map((blog) => (
                    <li key={blog._id} style={myStyle} className='list-unstyled  '>
                        <div class="row">
                            <div class="col-sm-6 mt-2 w-100  " >
                                <div class="card"style={myStyle}>
                                    <div class="card-body border-black">
                                        <h5 class="card-title">{formatDate(blog.createdAt)}</h5>
                                        <span class="card-text"><b>{blog.name} : </b></span>
                                       <span>{blog.desc}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default New;
