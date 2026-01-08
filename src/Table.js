import React from "react";
import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule, TooltipModule } from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule, TooltipModule]);

export const Table = () => {
  const rowData = [
    { name: "arnab", age: 22, birthYear: 2000 },
    { name: "aman", age: 14, birthYear: 2002 },
    { name: "ankit", age: 32, birthYear: 2008 },
  ];

  const columnDefs = [
    {
      headerName: "Name",
      field: "name",
      tooltipField: "name",
    },
    {
      headerName: "Age",
      field: "age",
      tooltipField: "name", // you can show age too
      cellStyle: (params) => ({
        backgroundColor: params.value > 18 ? "lightgreen" : "lightcoral",
        color: "black",
        fontWeight: "600",
      }),
    },
    { headerName: "Birth Year", field: "birthYear", tooltipField: "name" },
  ];

  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, flex: 1 }}
        enableBrowserTooltips={true}
        tooltipShowDelay={{tooltipShowDelay:2}}
      />
    </div>
  );
};
