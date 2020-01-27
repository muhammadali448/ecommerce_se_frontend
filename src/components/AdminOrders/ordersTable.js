import React from "react";
import MaterialTable from "material-table";

export const OrdersTable = ({ orders }) => {
  console.log("--orders: ", orders);
  return (
    <React.Fragment>
      <MaterialTable
        columns={[
          { title: "Order Id", field: "_id" },
          { title: "Ordered By", field: "user.name" },
          { title: "Transaction Id", field: "transaction_id" },
          {
            title: "Status",
            field: "status"
          },
          {
            title: "Amount",
            field: "amount"
          }
        ]}
        data={orders}
        title="Orders"
        detailPanel={rowData => {
          return rowData.cart.map(({ _id, name, price }) => (
            <ul>
              <li>Id: {_id}</li>
              <li>name: {name}</li>
              <li>Price: {price}</li>
            </ul>
          ));
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
      />
    </React.Fragment>
  );
};
