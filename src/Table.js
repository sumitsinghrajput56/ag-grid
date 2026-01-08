import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

export const Table = () => {
  const rowData = [
    { name: "arnab", age: 22, birthYear: 2000 },
    { name: "aman", age: 14, birthYear: 2002 },
    { name: "ankit", age: 32, birthYear: 2008 },
  ];

  const columnDefs = [
    { headerName: "Name", field: "name" },
    {
      headerName: "Age",
      field: "age",
      cellClass: (params) => (params.value>18?"MoreThen18":"LessThen18"),
    },
    { headerName: "Birth Year", field: "birthYear" },
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, flex: 1 }}
      />
    </div>
  );
};
