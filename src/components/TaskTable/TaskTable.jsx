import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function TaskTable({ rows, columns }) {
  return (
    <DataGrid
      sx={{
        ".MuiDataGrid-withBorderColor": {
          border: "none",
        },
        ".MuiDataGrid-main": { gap: "8px" },
        "&.MuiDataGrid-root": {
          border: "none",
          color: "white",
          textAlign: "right",
          fontSize: "13px",
        },
        ".css-yrdy0g-MuiDataGrid-columnHeaderRow": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
        ".MuiDataGrid-virtualScroller": {
          height: "30vh",
        },
        ".MuiDataGrid-virtualScrollerRenderZone": {
          gap: "8px",
          width: "100%",
        },
        ".MuiDataGrid-row": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        },
        ".MuiDataGrid-row, .MuiDataGrid-columnHeadersInner": {
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          width: "100%",
          padding: "1px",
          borderRadius: "8px",
        },
        ".MuiSvgIcon-fontSizeMedium path": {
          fill: "white",
        },
        ".MuiDataGrid-cell": {
          minWidth: "0px !important",
          width: "fit-content !important",
          padding: "0",
          display: "flex",
        },
        ".MuiDataGrid-cell--textLeft": {
          width: "25% !important",
          display: "flex",
          justifyContent: "center",
        },
        ".MuiDataGrid-columnHeaderDraggableContainer": {
          display: "flex",
          justifyContent: "center",
        },

        ".MuiDataGrid-columnSeparator--sideRight": {
          display: "none",
        },
        ".MuiToolbar-root": {
          width: "100%",
          color: "white",
          direction: "ltr",
        },
        ".MuiDataGrid-footerContainer": {
          flexDirection: "row-reverse",
        },
      }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 3 },
        },
      }}
      pageSizeOptions={[1, 3]}
      checkboxSelection
    />
  );
}

export default TaskTable;
