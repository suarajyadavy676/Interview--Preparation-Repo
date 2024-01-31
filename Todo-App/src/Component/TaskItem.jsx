import React from "react"
function TaskItem(props) {
  const {tasks,setTask} = props

  console.log(tasks)
  function deletebtn(id){
    setTask(tasks.filter((e)=> e.id != id))
  }
  

  return (
    <>
      <table className="border-2 border-black border-collapse m-auto">
        {(tasks).map(e => {
          return(
            <>
              <tr key={e.id} className="border-2 border-black border-collapse">
              <td className="border-2 border-black border-collapse">{e.task}</td>
              <td className="border-2 border-black border-collapse">{e.completed?"Completed":"Not Completed"}</td>
              <td className="border-2 border-black border-collapse">{e.taskAssignedTo}</td>
              <td className="border-2 border-black border-collapse bg-slate-600 text-white" onClick={()=>deletebtn(e.id)}><button>Delete Task</button></td>
              <td className="border-2 border-black border-collapse bg-red-600 text-white"> <button>Toggle Task</button></td>
              </tr>
            </>
            )
        })}
      </table>
    </>
  )
}

export default React.memo(TaskItem);
