import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs(props) {
    let iconStyle = {
        marginRight: '0.5rem',
    };

    let textStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
    };

    return (
        <div className="container my-5">
            <h1 className="my-4">Contact Us</h1>
            <div style={textStyle}>
                <p><FontAwesomeIcon icon={faEnvelope} style={iconStyle} /> <strong>Email:</strong> example@example.com</p>
                <p><FontAwesomeIcon icon={faPhone} style={iconStyle} /> <strong>Phone:</strong> +1234567890</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} /> <strong>Address:</strong> 123 Street, City, Country</p>
            </div>
        </div>
    );
}
