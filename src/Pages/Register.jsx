import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    // console.log(createUser);
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const { email, password } = data
        createUser(email, password)
            .then(result => {
                console.log(result);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content">
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required {...register("name")}
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name="email" className="input input-bordered" required {...register("email")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name="password" className="input input-bordered" required {...register("password")} />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? Please, <NavLink className='font-bold text-blue-400' to='/login'>Login</NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;