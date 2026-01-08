import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  AllCommunityModule,
  TooltipModule,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule, TooltipModule]);

export const Table = () => {
//   const rowData = [
//     { name: "arnab", age: 22, birthYear: 2000 },
//     { name: "aman", age: 14, birthYear: 2002 },
//     { name: "ankit", age: 32, birthYear: 2008 },
//   ];

  const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      tooltipField: "name",
    },
      {
      headerName: "Name",
      field: "name",
      tooltipField: "name",
    },
      {
      headerName: "Email",
      field: "email",
    },
      {
      headerName: "Body",
      field: "body",
    },
      {
      headerName: "PostId",
      field: "postId",
    },
   
  ];

  const onGridReady = (params) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((resp) => { console.log(resp)
         params.api.applyTransaction({ add: resp })});
  };

  const rowSelectionType="single";

  return (
    <div className="ag-theme-quartz" style={{ height: 400 }}>
      <AgGridReact
        columnDefs={columnDefs}
        defaultColDef={{ sortable: true, filter: true, flex: 1 }}
        enableBrowserTooltips={true}
        onGridReady={onGridReady}
        tooltipShowDelay={{ tooltipShowDelay: 2 }}
        rowSelection={rowSelectionType}
      />
    </div>
  );
};
