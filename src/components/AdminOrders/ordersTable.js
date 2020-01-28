import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Select from "@material-ui/core/Select";
import moment from "moment";
import useStyles from "./styles";

export const OrdersTable = ({ orders, statusValues, updateStatusValue }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (e, orderId) => {
    updateStatusValue(orderId, e.target.value);
    console.log(e.target.value, orderId);
  };

  return (
    <React.Fragment>
      <MaterialTable
        columns={[
          { title: "Order Id", field: "_id" },
          {
            title: "Ordered By",
            field: "user.name",
            render: rowData => (
              <div style={{ width: 150, maxWidth: 250 }}>
                {rowData.user.name}
              </div>
            )
          },
          {
            title: "Ordered On",
            field: "createdAt",
            render: rowData => (
              <div style={{ width: 100 }}>
                {moment(rowData.createdAt).fromNow()}
              </div>
            )
          },
          {
            title: "Total Products",
            render: rowData => (
              <div style={{ width: 120 }}>{rowData.cart.length}</div>
            )
          },
          {
            title: "Delivery Address",
            field: "address",
            render: rowData => (
              <div style={{ width: 300, maxWidth: 500 }}>{rowData.address}</div>
            )
          },
          {
            title: "Transaction Id",
            field: "transaction_id",
            render: rowData => (
              <div style={{ width: 120 }}>{rowData.transaction_id}</div>
            )
          },
          {
            title: "Status",
            field: "status",
            render: rowData => (
              <div style={{ width: 140 }}>
                <Select
                  native
                  value={rowData.status}
                  onChange={e => handleChange(e, rowData._id)}
                  inputProps={{
                    name: "status",
                    id: "status"
                  }}
                >
                  {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </Select>
              </div>
            )
          },
          {
            title: "Amount",
            field: "amount"
          }
        ]}
        data={orders}
        title="Orders"
        detailPanel={rowData => {
          return (
            <div className={classes.details}>
              {rowData.cart.map(({ _id, name, price, count }) => (
                <Card key={_id} className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="body1" color="primary">
                        {name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Product Id: {_id}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Quantity: {count}
                      </Typography>
                      <Typography
                        variant="body1"
                        className={classes.price}
                        component="p"
                      >
                        Price: {price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => history.push(`/view-product/${_id}`)}
                    >
                      View Product
                    </Button>
                  </CardActions>
                </Card>
              ))}
            </div>
          );
        }}
      />
    </React.Fragment>
  );
};
