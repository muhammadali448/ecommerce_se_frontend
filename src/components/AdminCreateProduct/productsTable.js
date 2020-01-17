import React from "react";
import MaterialTable from "material-table";
import moment from "moment";

export const ProductsTable = ({ products }) => (
  <React.Fragment>
    <MaterialTable
      title="Products"
      columns={[
        { title: "ID", field: "_id" },
        // {
        //   title: "Photo",
        //   field: "photo",
        //   render: rowData => (
        //     <img
        //       style={{ height: 50, borderRadius: "50%" }}
        //       alt={rowData.name}
        //       src={rowData.avatar}
        //     />
        //   )
        // },
        { title: "Name", field: "name" },
        { title: "Quantity", field: "quantity", type: "numeric" },
        { title: "Price", field: "price", type: "numeric" },
        // {
        //   title: "Created",
        //   field: "createdAt",
        //   type: "date",
        //   render: user => moment(user.createdAt).format("DD-MM-YYYY")
        // },
        { title: "Sold", field: "sold", type: "numeric" },
        { title: "Shipping", field: "shipping", type: "boolean" }
      ]}
      data={products}
    />
  </React.Fragment>
);
