import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

function GoalieGridComponent({ goals }) {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState(Object.values(goals));

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "goals" },
    { field: "position" },
    { field: "dexterity" },
    { field: "team" },
  ]);

  const gridOptions = {
    defaultColDef: {
      resizable: false,
    },
    autoSizeStrategy: {
      type: "fitGridWidth",
      defaultMinWidth: 100,
      columnLimits: [
        {
          colId: "Name",
          minWidth: 175,
        },
      ],
    },
  };

  return (
    <div
      className="ag-theme-quartz my-4"
      style={{ height: 300, width: "33vh" }}
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        gridOptions={gridOptions}
      />
    </div>
  );
}

export default GoalieGridComponent;
