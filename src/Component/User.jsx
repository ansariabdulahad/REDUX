const User = () => {
    const design = (
        <>
            <div className="container py-2 mt-5">
                <div className="row">
                    <div className="col-md-2">
                        <select className="p-2 w-100">
                            <option value="FILTER_BY_EMAIL">Filter By Email</option>
                            <option value="FILTER_BY_MOBILE">Filter By Mobile</option>
                        </select>
                    </div>
                    <div className="col-md-10">
                        <input type="text" placeholder="Search..." className="p-2 w-100" />
                    </div>
                </div>
                <table className="table mt-5 text-center">
                    <thead className="border-bottom">
                        <th>Sr.No</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </thead>
                </table>
            </div>
        </>
    );
    return design;
}

export default User;