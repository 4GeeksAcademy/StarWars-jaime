import React from "react";

export const Jumbotron = () => {

    return(
        <div className="container-fluid d-flex justify-content-between">
            <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 text-center">
        <h1 className="display-5 fw-bold">Esto seria un Jumbotron</h1>
        <p className="col-md-8 fs-4 ">Using a series of utilities, you can create this jumbotron, 
            just like the one in previous versions of Bootstrap. Check out the examples below 
            for how you can remix and restyle it to your liking.</p>
      </div>
    </div>
        </div>
    );
};