import React from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ActionButton = ({ data }) => {
  return (
    <button onClick={() => console.log(`${data.make} ${data.model}` )}>
      Click me
    </button>
  );
};

export const Table = () => {
  const rowData = [
    { make: "Toyota", model: "Celica", price: 25000 },
    { make: "Tata", model: "xl", price: 35000 },
    { make: "Mahindra", model: "x", price: 4000 },
  ];

  const columnDefs = [
    { headerName: "Make", field: "make" },
    { headerName: "Model", field: "model" },
    { headerName: "Price", field: "price" },
    {
      headerName: "Action",
      field: "price",
      cellRenderer: ActionButton,
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, flex: 1 }}
      />
    </div>
  );
};
