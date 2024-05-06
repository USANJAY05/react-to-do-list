import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

function App() {
  const [items,setItems]=useState([])
  const [item,setItem]=useState("")
  const [search,setSearch]=useState("")
  // const [error,setError]=useState()
  // const [loading,setLoading]=useState()

  useEffect(()=>{
    const storage=JSON.parse(localStorage.getItem("item"))||[]
    setItems(storage)
  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hadle submit")
    addItem(item)
    setItem("")
  }
  const addItem=(text)=>{
    console.log("handleAdd")
    const id=items.length+1
    const item={id,text,checked:false}
    const listItem=[...items,item]
    setItems(listItem)
    localStorage.setItem("item",JSON.stringify(listItem))
  }
  const handleCheck=(id)=>{
    console.log("HandleCheck")
    const item=items.map(item=>(item.id===id?{...item,checked:!item.checked}:item))
    setItems(item)
    localStorage.setItem("item",JSON.stringify(item))

  }
  const handleDel=(id)=>{
    console.log("hanldeDel")
    const item=items.filter(item=>item.id!==id)
    setItems(item)
    localStorage.setItem("item",JSON.stringify(item))

  }
  return (
    <section>
      <Header item={item} setItem={setItem} search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
      <Main handleCheck={handleCheck} handleDel={handleDel} items={items.filter(item=>item.text.toLowerCase().includes(search.toLowerCase()))} />
    </section>
  );
}

export default App;
