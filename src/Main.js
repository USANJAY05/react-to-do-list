import React from 'react'

const Main = ({handleDel,handleCheck,items,error,loading}) => {
  return (
    <section className="main">
            {error && <p>{`Error: ${error}`}</p>}
      {loading && <p>Loading....</p>}
      {!error && !loading &&
        (items.map(item=>(
        <section key={item.id} className="container">
            <input 
            checked={item.checked}
            type="checkbox"
            onChange={()=>handleCheck(item.id)}
            />
            <h2
            onClick={()=>handleCheck(item.id)}
            >{item.text}</h2>
            <button 
            onClick={()=>handleDel(item.id)}
            className="delBtn">Delete</button>
    </section>
        )))}
    </section>
  )
}

export default Main