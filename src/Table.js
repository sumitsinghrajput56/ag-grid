import React from "react";
import { AgGridReact } from "ag-grid-react";

import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export const Table = () => {
  const rowData = [
    { name: "sumit", age: 27 },
    { name: "arnab", age: 20 },
    { name: "anubhav", age: 23 },
  ];

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      checkboxSelection:true
    },
    {
      headerName: "Age",
      field: "age",
    },
  ];

  const defaultColDef = {
    sortable: true,
    editable: true,
    filter: true,
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
      />
    </div>
  );
};
