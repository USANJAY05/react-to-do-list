import React from 'react'

const Header = ({item,setItem,search,setSearch,handleSubmit}) => {
  return (
    <header className='header'>
        <h1>Notes</h1>
        <form className="addItem" onSubmit={handleSubmit}>
            <input 
            autoFocus
            required
            type="text" 
            tabIndex={0}
            placeholder='Enter Text'
            value={item}
            onChange={(e)=>setItem(e.target.value)}
            />
            <button className="btn">Add</button>
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