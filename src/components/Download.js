import React from 'react'
import url from "./WellText.apk"

export default function Download() {
    const downloadfile = () => {

    }
    return (
        <>
            <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold">Download Android APK Of WellText Now</h1>
                    <p class="col-md-8 fs-5">Download the ad-free Android version of WellText today, completely free and without any signup required! Enjoy a seamless writing experience with our intuitive and feature-rich text editor. Whether you're jotting down notes, drafting a blog post, or working on your next novel, WellText offers a clutter-free environment to unleash your creativity. Say goodbye to distractions and hello to productivity with our sleek and user-friendly app. Get started now and elevate your writing game on the go!</p>
                    <a href={url} download={url} class="btn btn-primary btn-lg" type="button">Download Now</a>
                </div>
            </div>
        </>
    )
}
