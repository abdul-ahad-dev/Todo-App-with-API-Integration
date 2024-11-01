// import React from 'react'

async function Todo() {
    let res = await fetch("http://localhost:3000/api/todos");
    res = await res.json()
    console.log(res)
  return (
    <>
    <div>Todo</div>
    {res.map((item,index)=>{return <div key={index}>{item.todo}</div>})}
    </>
  )
}

export default Todo