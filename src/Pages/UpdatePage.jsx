const UpdatePage = () => {
    return (
        <section className="p-6 shadow-lg rounded-lg lg:mt-10 mt-5">
            <form className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4 ">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Photo</label>
                            <input id="firstname" type="text" placeholder="Photo URL" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Country Name</label>
                            <input id="lastname" type="text" placeholder="Country Name" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Tourist Spot Name</label>
                            <input id="firstname" type="text" placeholder="Tourist Spot Name" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Location</label>
                            <input id="lastname" type="text" placeholder="Location" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Short Description</label>
                            <input id="firstname" type="text" placeholder="Short Description" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Average Cost</label>
                            <input id="lastname" type="number" placeholder="Average Cost" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm font-bold">Seasonality</label>
                            <input id="firstname" type="text" placeholder="Seasonality" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm font-bold">Travel Time</label>
                            <input id="lastname" type="Number" placeholder="Days" className="w-full rounded-md p-2 border" />
                        </div>
                        <div className="col-span-full">
                            <label className="text-sm font-bold">Total Visitor Per Year</label>
                            <input type="Number" placeholder="Total Visitor Per Year" className="w-full rounded-md p-2 border" />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <button className="btn btn-block btn-warning">Update</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdatePage;