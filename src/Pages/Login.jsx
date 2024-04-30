import { NavLink } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2 space-y-3">
                            <button className="btn btn-primary">Login</button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white gap-2">
                                <FaGoogle />
                                SIGN IN WITH GOOGLE
                            </button>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-blue-500 text-white gap-2">
                                <FaGithub />
                                SIGN IN WITH GITHUB
                            </button>
                        </div>
                        <p>New to here? Please, <NavLink className='font-bold text-blue-400' to='/register'>Register</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;