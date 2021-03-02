import React from 'react';
import './App.css';
import my_image from '../src/assets/my_image.JPG';

const Image = () => {
    return(
        <>
            <div className="my_image d-flex justify-content-center mt-4">
                <img className="rounded-circle my-2" src={my_image} alt="Yasin Hirani"/>
            </div>
        </>
    );
}
export default Image;