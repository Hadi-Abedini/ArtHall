import React, { useState } from "react";

import TaskTable from "../../components/TaskTable/TaskTable";
import SearchInput from "../../components/Form/SearchInput";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../Api/api";

const columns = [
  { field: "title", headerName: "عنوان" },
  { field: "description", headerName: "توضیح کوتاه" },
  { field: "date", headerName: "تاریخ" },
];

function TaskList() {
  const { data: tasks, isSuccess } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });
  const rows = isSuccess ? tasks.data : [];
  const [filterdData, setFilterdData] = useState();
  return (
    <div className="w-3/5 flex flex-col gap-4">
      <div className="w-1/4 flex text-sm justify-between text-white">
        <span className="font-[vazir-semibold] border-b-2 border-[#F1C400] p-1">
          پیش فرض
        </span>
        <span className="font-[vazir-semibold] p-1">دسته بندی</span>
      </div>
      <SearchInput data={rows} setData={setFilterdData} />
      {isSuccess && <TaskTable columns={columns} rows={!!filterdData?filterdData:rows} />}
    </div>
  );
}

export default TaskList;
