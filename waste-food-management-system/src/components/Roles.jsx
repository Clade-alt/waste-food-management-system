import React from 'react'
import { NavLink } from 'react-router-dom'

const Roles = () => {
    return (
        <div>
            <div>
                <section id="roles">
                    <div className='container my-5 py-2'>
                        <div className="row">
                            <div className="col-12">
                                <h3 className="fs-5 mt-5 text-center">Roles</h3>
                                <h1 className="display-6 mb-2 text-center">Pick a <b>Role</b> To Continue</h1>
                                <hr className="w-50 mx-auto" />
                                <div className="card text-center my-5">
                                    <div className="card-header">
                                        &nbsp;
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <NavLink to="/foodds" className="btn btn-outline-warning rounded-pill pb-2 w-25">Go</NavLink>
                                    </div>
                                    <div className="card-footer text-muted">
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="card text-center my-5">
                                    <div className="card-header">
                                        &nbsp;
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <NavLink to="/foodrequests" className="btn btn-outline-warning rounded-pill pb-2 w-25">Go</NavLink>
                                    </div>
                                    <div className="card-footer text-muted">
                                        &nbsp;
                                    </div>
                                </div>
                                <div className="card text-center my-5">
                                    <div className="card-header">
                                        &nbsp;
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Special title treatment</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <NavLink to="/industryp" className="btn btn-outline-warning rounded-pill pb-2 w-25">Go</NavLink>
                                    </div>
                                    <div className="card-footer text-muted">
                                        &nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Roles;