import React, { useRef } from 'react'

const Header = ({item,setItem,search,setSearch,handleSubmit}) => {
    const inputRef=useRef()
  return (
    <header className='header'>
        <h1>Notes</h1>
        <form className="addItem" onSubmit={handleSubmit}>
            <input 
            ref={inputRef}
            autoFocus
            required
            type="text" 
            tabIndex={0}
            placeholder='Enter Text'
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            />
            <button
            onClick={()=>inputRef.current.focus()}
            className="btn">Add</button>
        </form>
        <section className="searchItem">
            <input 
            type="search"
            placeholder='Search'
            tabIndex={0}
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            />
        </section>
    </header>
  )
}

export default Header