import React, { useState, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import sanityClient from "@sanity/client";
const client = sanityClient({
    projectId: '2flqhnlp',
    dataset: 'production',
    useCdn: true, // Use the Content Delivery Network for faster response times
});

export default function AddBlog() {
    const editorRef = useRef(null);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [slug, setslug] = useState('');
    const [content, setContent] = useState('<p>Welcome To WellText</p>');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (newContent) => {
        if (content) {
            setContent(newContent);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const newPost = {
            _type: 'update', // Replace with your actual content type schema name
            title,
            desc,
            content: editorRef.current.getContent(),
        };

        try {
            const res = await client.create(newPost);
            console.log('Post created:', res);
            // Handle successful post creation (e.g., clear form)
            setIsLoading(false);
        } catch (error) {
            console.error('Error creating post:', error);
            setError(error.message);
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1 className="text-center">Add A Blog</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="form-group">
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" placeholder="Add A Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="slug" className="form-label">Slug</label>
                    <input type="text" className="form-control" id="slug" placeholder="Slug" value={slug} onChange={(e) => setslug(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="form-control" id="desc" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <Editor
                        apiKey="cyamfx5u42wgqop0qpytq20dkluwcnngeefqe36iimrq76xj" // Replace with your TinyMCE API key
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        initialValue={content}
                        onEditorChange={handleChange}
                        init={{
                            height: 500,
                            menubar: true,
                            plugins: [
                                // Essential plugins
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount',
                                'textcolor', // Text color picker
                                'textpattern', // Text patterns
                                'emoticons', // Emoticons
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body {font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>
                    {isLoading ? 'Creating...' : 'Add Blog'}
                </button>
            </form>
        </>
    );
}
