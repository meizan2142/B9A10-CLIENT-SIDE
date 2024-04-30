import { NavLink } from "react-router-dom";

const MyList = () => {
    return (
        <div className="overflow-x-auto lg:mt-10 mt-5">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td><NavLink to='/update' className="btn btn-warning">Update</NavLink></td>
                        <td><NavLink className="btn btn-error">Delete</NavLink></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyList;