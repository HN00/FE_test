import React from 'react';
import { Table } from 'react-bootstrap';

const CustomTable = (props) => {
    const { vehicles, numberPage, handleModal } = props;

    const formatDate = (date) => {

        const time = new Date(date);
        const month = time.getMonth() + 1;
        const day = time.getDate();
        const year = time.getFullYear();

        return month + "/" + day + "/" + year;
    }

    return(
        <Table striped bordered hover size="sm" className="txtCenter">
            <thead>
                <tr>
                    <th style={{ width: "8.33%" }}>#</th>
                    <th style={{ width: "16.66%"}}>Name</th>
                    <th style={{ width: "16.66%"}} >Vehicle Class</th>
                    <th style={{ width: "16.66%"}} >Model</th>
                    <th style={{ width: "16.66%"}} >Manufacturer</th>
                    <th style={{ width: "8.33%" }} >Cost In Credits</th>
                    <th style={{ width: "8.33%" }} >Created</th>
                    <th style={{ width: "8.33%" }} >Actions</th>
                </tr>
            </thead>

            <tbody>
                {vehicles && vehicles.map(( item, index ) => (
                    <tr key = {index}>
                        <td>{ numberPage * 10 + index + 1 }</td>
                        <td>{ item.name }</td>
                        <td>{ item.vehicle_class }</td>
                        <td>{ item.model }</td>
                        <td>{ item.manufacturer }</td>
                        <td>{ item.cost_in_credits === "unknown" ? "-" : item.cost_in_credits }</td>
                        <td>{ formatDate(item.created) }</td>
                        <td onClick={() => handleModal(item.url)}><i className="far fa-eye"/></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default CustomTable;