import React, { useEffect, useState, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
export default function Addblog() {
    const editorRef = useRef(null);
    return (<>
        <h1 className='text-center'>Add A Blog</h1>
        <form>
            <div class="form-group">
                <label for="exampleFormControlInput1">Title</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Add A Title" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Meta Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Content</label>
                <Editor
                    apiKey="cyamfx5u42wgqop0qpytq20dkluwcnngeefqe36iimrq76xj"
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    initialValue="<p>Welcome To WellText</p>"
                    init={{
                        height: 500,
                        menubar: true, // Enable the menu bar
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
                        content_style: 'body {font - family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }} />
            </div>
            <div>
                <button type='submit'>Add Blog</button>
            </div>
        </form>
    </>
    )
}
