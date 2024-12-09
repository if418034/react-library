import React from 'react'

export const ReturnBook = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="text-center">
                <img src={require('./../../Images/CakeImages/red-velvet.png')} width='230'
                     alt="cake"/>
                <h6 className='mt-2'>Red Velvet</h6>
                <p>Vood App</p>
                <a href="#" className='btn main-color text-white'>Order</a>
            </div>
        </div>
    );
};