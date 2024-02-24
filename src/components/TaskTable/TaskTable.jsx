import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "title", headerName: "عنوان" },
  { field: "description", headerName: "توضیح کوتاه" },
  { field: "date", headerName: "تاریخ" },
];

const rows = [
  { id: 1, title: "Snow", description: "Jon", date: 35 },
  { id: 2, title: "Lannister", description: "Cersei", date: 42 },
  { id: 3, title: "Lannister", description: "Jaime", date: 45 },
  { id: 4, title: "Stark", description: "Arya", date: 16 },
  { id: 5, title: "Targaryen", description: "Daenerys", date: 1 },
  { id: 6, title: "Melisandre", description: null, date: 150 },
  { id: 7, title: "Clifford", description: "Ferrara", date: 44 },
  { id: 8, title: "Frances", description: "Rossini", date: 36 },
  { id: 9, title: "Roxie", description: "Harvey", date: 65 },
];

function TaskTable() {
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
            fontSize:"13px"
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
            display:"flex",
            justifyContent:"center"
          },".MuiDataGrid-columnHeaderDraggableContainer": {
            display:"flex",
            justifyContent:"center"
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
  )
}

export default TaskTable