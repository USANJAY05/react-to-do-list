import { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import apiRequest from './apiRequest';

function App() {
  const API="http://localhost:2500/items"
  const [items,setItems]=useState([])
  const [item,setItem]=useState("")
  const [search,setSearch]=useState("")
  const [error,setError]=useState()
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    // const storage=JSON.parse(localStorage.getItem("item"))||[]
    // setItems(storage)
    const fetchItem=async()=>{
      try{
        const response=await fetch(API)
        const listItems=await response.json()
        setItems(listItems)
        console.log("hi")
      }
      catch(error){
        console.log(error)
      }
      finally{
        setLoading(false)
      }
    }
    setTimeout(() => {
      (async()=>fetchItem())()

    }, 2000);

  },[])

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("hadle submit")
    addItem(item)
    setItem("")
  }
  const addItem=async(text)=>{
    console.log("handleAdd")
    const id=items.length+1
    const item={id,text,checked:false}
    const listItem=[...items,item]
    setItems(listItem)
    localStorage.setItem("item",JSON.stringify(listItem))

    const postMethod={
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(item)
    }
    const result=await apiRequest(API,postMethod)
    if(result) setError(result)
  }
  const handleCheck=async(id)=>{
    console.log("HandleCheck")
    const item=items.map(item=>(item.id===id?{...item,checked:!item.checked}:item))
    const check=item.filter(item=>item.id===id)
    setItems(item)
    localStorage.setItem("item",JSON.stringify(item))

    const patchMethod={
      method:"PATCH",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:check[0].checked})
    }
    const reqURL=`${API}/${id}`
    const result=await apiRequest(reqURL,patchMethod)
    if(result) setError(result)

  }
  const handleDel=async(id)=>{
    console.log("hanldeDel")
    const item=items.filter(item=>item.id!==id)
    setItems(item)
    localStorage.setItem("item",JSON.stringify(item))

    const deleteMethod={
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(items.id)
    }
    const reqUrl=`${API}/${id}`
    const result=await apiRequest(reqUrl,deleteMethod)
    if(result) setLoading(error)

  }
  return (
    <section>
      <Header item={item} setItem={setItem} search={search} setSearch={setSearch} handleSubmit={handleSubmit} />

            <Main handleCheck={handleCheck} handleDel={handleDel} items={items.filter(item=>item.text.toLowerCase().includes(search.toLowerCase()))} loading={loading} error={error} />
    </section>
  );
}

export default App;
