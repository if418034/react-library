export const Heros = () => {
    return (
        <div>
            <div className="d-non d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>

                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been eating?</h1>
                            <p className="lead">
                                The kitchen team would love to know what you have been eating.
                                Whether it is a favorite or something you'd like to try,
                                we will try our best to serve it to you!
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items center">
                        <div className="ml-2">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most delicious cake for our
                                Vood App enjoyers!
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>
            {/*{ Mobile Heros }*/}
            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="mt-2">
                            <h1>What have you been eating?</h1>
                            <p className="lead">
                                The kitchen team would love to know what you have been eating.
                                Whether it is a favorite or something you'd like to try,
                                we will try our best to serve it to you!
                            </p>
                            <a href="#" className='btn main-color btn-lg text-white'>Sign Up</a>
                        </div>
                    </div>
                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our collection is always changing!</h1>
                            <p className="lead">
                                Try to check in daily as our collection is always changing!
                                We work nonstop to provide the most delicious cake for our
                                Vood App enjoyers!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

