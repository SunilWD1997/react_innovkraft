import { useState } from "react";



export default function Home() {
 
  const [data,setData] = useState({name:'', email: '', number:''})
  const[storeData, setStoreData]=useState([])
  
  const inputHandel = (e) =>{
      console.log(e.target.name, e.target.value);
      const name = e.target.name;

      const value = e.target.value;
      setData({...data, [name]: value})
      console.log(data)
  }

const formSubmit = (e) =>{
  e.preventDefault()
  
  const instantData = [...storeData, data];
  setStoreData(()=>{
    return instantData;
  });
  console.log(storeData);
  setData({name:'', email: '', number:''});
}

  return (
    <div className="container" >
      <form action="" onSubmit={formSubmit}>
        <input type="text" name='name' placeholder="Enter Your Name" value={data.name} onChange={inputHandel} required/>
        <input type="email" name='email' placeholder="Enter Your Email" value={data.email} onChange={inputHandel} required/>
        <input type="tel" name="number"  maxLength="10" placeholder="Enter your number" value={data.number} onChange={inputHandel} required/>
        <button  >Submit</button>
      </form>

           <div className="listData">
{storeData?.map((items, indx)=>{
  return <div key={indx}><span>{`Name: ${items.name}`}</span> <span>{`Email: ${items.email}`}</span> <span>{`Number: ${items.number}`}</span></div>
})}
              
              
           </div>
    </div>
  );
}
