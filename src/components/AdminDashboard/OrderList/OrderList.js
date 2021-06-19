import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SidebarLeft from '../SidebarLeft/SidebarLeft';

const OrderList = () => {
    return (
        <div className="container row">
            {/* <div className="col-md-3">
                <SidebarLeft />
            </div> */}
            <div className="col-md-9">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Pay With</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sajjad Sadiq</td>
                            <td>sajjadsadiqofficial@gmail.com</td>
                            <td>Birthday Events</td>
                            <td>Creadit Card</td>
                            <td>Pending <ArrowDropDownIcon /></td>
                        </tr>
                        <tr>
                            <td>Sajjad Sadiq</td>
                            <td>sajjadsadiqofficial@gmail.com</td>
                            <td>Birthday Events</td>
                            <td>Creadit Card</td>
                            <td>Pending <ArrowDropDownIcon /></td>
                        </tr>
                        <tr>
                            <td>Sajjad Sadiq</td>
                            <td>sajjadsadiqofficial@gmail.com</td>
                            <td>Birthday Events</td>
                            <td>Creadit Card</td>
                            <td>Pending <ArrowDropDownIcon /></td>
                        </tr>
                        <tr>
                            <td>Sajjad Sadiq</td>
                            <td>sajjadsadiqofficial@gmail.com</td>
                            <td>Birthday Events</td>
                            <td>Creadit Card</td>
                            <td>Pending <ArrowDropDownIcon /></td>
                        </tr>
                        <tr>
                            <td>Sajjad Sadiq</td>
                            <td>sajjadsadiqofficial@gmail.com</td>
                            <td>Birthday Events</td>
                            <td>Creadit Card</td>
                            <td>Pending <ArrowDropDownIcon /></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;