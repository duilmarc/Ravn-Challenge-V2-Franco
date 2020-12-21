import React from 'react';
import { Spinner } from 'react-bootstrap'; 

const Loader = () => {
    return (
    <>
    <div className='loader'>
        <Spinner
            as="loader"
            animation="border"
            size="m"
            role="status"
        />
        <h6>Loading</h6>
    </div>     
    </>
    )
}
export default Loader;