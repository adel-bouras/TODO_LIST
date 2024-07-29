import { useState } from 'react';
import './index.css'

function App(){
  const [items , setItems] = useState([]);
  const [text , setText] = useState('');

  const handlAdd = ()=>{
    if(text!==''){
      setItems([text,...items]);
    }
    setText('');
  }

  const moveTop = (i)=>{
    if(i>0){
      let before = [...items];
      [before[i-1],before[i]]=[before[i], before[i-1]]
      setItems(before);
    }
  }

  const moveDown = (i)=>{
    if(i<items.length-1){
      let before = [...items];
      [before[i], before[i+1]]=[before[i+1],before[i]];
      setItems(before);
    }
  }

  const handlDelete = (i)=>{
    setItems(items.filter((_,index)=>i!==index))
  }

  const handlKey = (e)=>{
    if(e.key==='Enter'){
      handlAdd();
    }

  }
  return(
    <div className='flex items-center flex-col w-full h-dvh bg-slate-800'>
      <h1 className='m-10 text-5xl text-center w-max text-white font-bold underline underline-offset-8 font-mono'>TODO LIST</h1>
      <div className='flex items-center gap-3'>

      <input onKeyDown={(e)=>handlKey(e)} type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='add some schedule work' className='rounded-l-2xl focus:outline-none pl-5  w-96 border-none h-10' />
      <button onClick={handlAdd} className='cursor-pointer text-white bg-red-800 w-20 h-10 rounded-r-2xl hover:bg-red-950' >Add</button>

      </div>
      {
        items.map((item , index)=>
          <div key={index} className='flex flex-row mt-10 pl-1 w-3/6 items-center justify-between bg-slate-600 rounded-2xl overflow-hidden'>
            <p className='text-white w-3/4 text-xl'>{item}</p>
            <div className='flex gap-2 w-auto'>
            <button onClick={()=>moveTop(index)} className='w-10 bg-yellow-950  hover:bg-yellow-900 rounded-2xl'>☝️</button>
            <button onClick={()=>moveDown(index)} className='w-10 bg-yellow-950 hover:bg-yellow-900 rounded-2xl'>👇</button>
            <button onClick={()=>handlDelete(index)} className='bg-red-600 hover:bg-red-950 w-20 h-10 text-white'>Delete</button>
            </div>
          </div>
        )
      }

    </div>
  )

}

export default App;