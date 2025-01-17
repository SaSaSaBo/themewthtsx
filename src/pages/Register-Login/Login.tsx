// import script from '../../js/scripts.js'
import React from 'react'
import './css/Styles.css'
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <div>
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>Login - SB Admin</title>
                <link href="css/styles.css" rel="stylesheet" />
                <script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
            </head>
            <body className="bg-primary">
                <div id="layoutAuthentication">
                    <div id="layoutAuthentication_content">
                        <main>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-5">
                                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                            <div className="card-body">
                                                <form>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                        <label htmlFor="inputEmail">Email address</label>
                                                    </div>
                                                    <div className="form-floating mb-3">
                                                        <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                                        <label htmlFor="inputPassword">Password</label>
                                                    </div>
                                                    <div className="form-check mb-3">
                                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                                        <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">

                                                        <a className="small" href="password.html">Forgot Password?</a>
                                                        <Link className="btn btn-primary btn-block" to="/">Login</Link>
                                                        
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <div className="small"><Link to="/register">Need an account? Sign up!</Link></div>
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
                                    <div className="text-muted">Copyright &copy; Your Website 2023</div>
                                    <div>
                                    <button className="btn btn-link" type="button">
                                          Privacy Policy
                                        </button>
                                        &middot;
                                        <button className="btn btn-link" type="button">
                                          Terms & Conditions
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
                <script src="../../js/scripts.js"></script>
            </body>
        </html>
    </div>
  )
}

export default Login
