//react
import React from "react";
//css
import "./App.css";
//components
import MUIDataTable from "mui-datatables";
import Header from "./components/Header";
//data
import { columns, data, options } from "./data.js";

function App() {
  return (
    <div>
      <Header text="Initech"/>
      <MUIDataTable
        title="Employee Directory"
        className="employeeTable"
        data={data}
        columns={columns}
        options={options}
      />
    </div>
  );
}

export default App;