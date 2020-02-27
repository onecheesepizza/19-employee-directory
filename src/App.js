import React from 'react';
import './App.css';
import MUIDataTable from "mui-datatables";
import { columns, data, options} from "./data.js";

function App() {
  return (
    <MUIDataTable
      title={"Employee Directory"}
      className="employeeTable"
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default App;
