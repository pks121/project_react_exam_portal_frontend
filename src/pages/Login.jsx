const Login = () => {
    return (
        <>
        
        <div className="container m-5 d-flex flex-column align-items-center justify-content-center">
            <h2 className="card-header p-2">Login Page</h2>
            <form className="border border-dark p-3 rounded-4">
                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input name="email" type="email" id="form2Example1" className="form-control" />
                </div>

                <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input name="password" type="password" id="form2Example2" className="form-control" />
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                            <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                        </div>
                    </div>

                    <div className="col">
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                <button onClick={authenticate(e)} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">Sign in</button>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>
                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                    </button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Login