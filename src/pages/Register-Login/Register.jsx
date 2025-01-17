import React from 'react'
import './css/Styles.css'
import script from '../../js/scripts.js'
import { Link } from 'react-router-dom'; 

function Register() {
  return (
    <div>
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Register - SB Admin</title>
                <link href="css/styles.css" rel="stylesheet" />
                <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
            </head>
            <body className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-7">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" />
                                                                <label htmlFor="inputFirstName">First name</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating">
                                                                <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" />
                                                                <label htmlFor="inputLastName">Last name</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPassword" type="password" placeholder="Create a password" />
                                                                <label htmlFor="inputPassword">Password</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-floating mb-3 mb-md-0">
                                                                <input className="form-control" id="inputPasswordConfirm" type="password" placeholder="Confirm password" />
                                                                <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4 mb-0">
                                                        <div className="d-grid"><Link className="btn btn-primary btn-block" to="/">Create Account</Link></div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><Link to="/login">Have an account? Go to login</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                    <div id="layoutAuthentication_footer">
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright &copy; Tutoring 2024</div>
                                    <div>
                                        <button className="btn btn-link" type="button">
                                          Privacy Policy
                                        </button>
                                        &middot;
                                        <button className="btn btn-link" type="button">
                                          Terms & Conditions
                                        </button>
                                        {/* <a href="#">Privacy Policy</a>
                                        &middot;
                                        <a href="#">Terms &amp; Conditions</a> */}
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
                <script src={script}></script>
            </body>
        </html>
    </div>
  )
}

export default Register
