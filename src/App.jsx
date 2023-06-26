/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Children, useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
//theme

import "primereact/resources/themes/soho-dark/theme.css"
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/arya-green/theme.css";
// import "primereact/resources/themes/saga-orange/theme.css";
//core
import "primereact/resources/primereact.min.css";
//Menu
// import { TabMenu } from 'primereact/tabmenu';
import { Menubar } from "primereact/menubar";
//icons
import "primeicons/primeicons.css";
//input
import { InputText } from "primereact/inputtext";
//button
import { Button } from "primereact/button";
//editor
import { Editor } from "primereact/editor";
//textarea
import { InputTextarea } from "primereact/inputtextarea";
//
import { SpeedDial } from "primereact/speeddial";
import { v4 as generateid } from "uuid";

function App() {
  //menu
  const items = [
    {
      icon: "pi pi-bars",
      items: [
        {
          label: "Inbox",
          icon: "pi pi-inbox",
        },
        {
          label: "Today",
          icon: "pi pi-calendar",
        },
        {
          label: "Upcoming",
          icon: "pi pi-calculator",
        },
        {
          label: "Filters & Labels",
          icon: "pi pi-th-large",
        },
      ],
    },
    {
      icon: "pi pi-home",
    },
  ];
  const end = (
    <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText placeholder="Search" />
    </span>
  );
  /////////////////////////////////////////////////////////////////
  //date
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  //editor
  //textarea
  const [show, setShow] = useState(true);
  function handelbtnn() {
    setShow(!show);
  }
const [tasklist, setTasklist] = useState({});
const [taskinput , setTaskinput] = useState("");
const [check , setCheck] = useState(true);


function handeladd() {
setCheck(!check)
if (taskinput == ""){
  return
}


let newtasklist = {...tasklist};
newtasklist[generateid()] = taskinput;
setTasklist(newtasklist);
setTaskinput("");
  }
function handeldelete(id) {
 const copy = {...tasklist};
 delete copy [id]
 setTasklist(copy)
}

  return (
    <div>
      <div className="card">
        <Menubar model={items} end={end} />
      </div>
      <div className="main-div">
        <div className="navbar-div">
          <div>
            <span className="today">Today</span>
            <span className="date"> {date} </span>{" "}
          </div>
          <div>
            <Button
              label="view"
              icon="pi pi-sliders-h"
              severity="secondary"
              outlined
            />
          </div>
        </div>
        <div className="btn">
        <Button onClick={handelbtnn} icon="pi pi-plus" rounded severity="secondary"    outlined />
        </div>
        <div className="input-txt">
          {show != true ? ( <div className="taske">
            <div className="inpt-task"><InputTextarea value={taskinput} onChange={(e) => setTaskinput(e.target.value)} rows={5}  cols={97}  placeholder="Task"/></div>
            <div className="btn-task-check"><Button label="Add Task" severity="secondary" outlined onClick={handeladd}/></div>
          </div> ) : null}
        </div>
          <div>
            {Object.keys(tasklist).map(function(taskid){
              return <div className="div-task"><Button size="small" icon="pi pi-check" rounded text aria-label="Filter" className="btn-task" onClick={function(){
                handeldelete(taskid)

              }}/><p className="p-task">{tasklist[taskid]} </p> </div>
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
