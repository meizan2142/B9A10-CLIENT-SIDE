import Swal from 'sweetalert2'
const AddForm = () => {
    const handleAdd = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const country = form.country.value;
        const tourist = form.tourist.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitor = form.visitor.value;
        const newSpot = { name, email, photo, country, tourist, location, description, cost, seasonality, time, visitor }
        console.log(newSpot);
        fetch('https://b9-a10-server-lovat.vercel.app/touristspotinfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Added TouristSpot Info successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
    return (
        <section className="p-6 shadow-lg rounded-lg lg:mt-10 mt-5">
            <form onSubmit={handleAdd} className="container flex flex-col mx-auto space-y-12">
                <div className="grid grid-cols-4 gap-6 p-6">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Name</label>
                            <input type="text" placeholder="Your Name" name="name" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Email</label>
                            <input type="email" placeholder="Email" name="email" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Photo</label>
                            <input type="text" placeholder="Photo URL" name="photo" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Country Name</label>
                            <input type="text" placeholder="Country Name" name="country" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Tourist Spot Name</label>
                            <input type="text" placeholder="Tourist Spot Name" name="tourist" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Location</label>
                            <input type="text" placeholder="Location" name="location" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Short Description</label>
                            <input type="text" placeholder="Short Description" name="description" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Average Cost</label>
                            <input type="number" placeholder="Average Cost" name="cost" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Seasonality</label>
                            <input type="text" placeholder="Seasonality" name="seasonality" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Travel Time</label>
                            <input type="Number" placeholder="Days" name="time" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full">
                            <label className="font-bold text-sm">Total Visitor Per Year</label>
                            <input type="Number" placeholder="Total Visitor Per Year" name="visitor" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block bg-[#f96969]">Add</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default AddForm;
