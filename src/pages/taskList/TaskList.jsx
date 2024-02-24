import React, { useState } from "react";

import TaskTable from "../../components/TaskTable/TaskTable";
import SearchInput from "../../components/Form/SearchInput";

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


function TaskList() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="w-3/5 flex flex-col gap-4">
      <div className="w-1/4 flex text-sm justify-between text-white">
        <span className="font-[vazir-semibold] border-b-2 border-[#F1C400] p-1">
          پیش فرض
        </span>
        <span className="font-[vazir-semibold] p-1">دسته بندی</span>
      </div>
      <SearchInput setSearchValue={setSearchValue} />
      <TaskTable columns={columns} rows={rows} />
    </div>
  );
}

export default TaskList;
