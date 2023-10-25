import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { userAction, getAllUser } from "../Redux/Action/user.action";

const User = () => {

    const dispatch = useDispatch();
    const response = useSelector(response => response);

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const Tr = ({ item }) => {
        const trDesign = (
            <tr>
                <td>{item.index + 1}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
            </tr>
        );
        return trDesign;
    }

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
                    <tbody>
                        {
                            response && response.data.map((item, index) => {
                                item['index'] = index;
                                return <Tr key={index} item={item} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
    return design;
}

export default User;