import { NavLink, useLoaderData } from "react-router-dom";
const MyList = () => {
    const mySpot = useLoaderData()
    return (
        <div className="overflow-x-auto lg:mt-10 mt-5">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country Name</th>
                        <th>Tourist Spot Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySpot.map(spot => <tr key={spot._id}>
                            <th>{spot._id}</th>
                            <td>{spot.name}</td>
                            <td>{spot.country}</td>
                            <td>{spot.tourist}</td>
                            <td><NavLink to='/update' className="btn btn-warning">Update</NavLink></td>
                            <td><NavLink  className="btn btn-error">Delete</NavLink></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;