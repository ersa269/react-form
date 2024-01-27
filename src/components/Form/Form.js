import React, {useEffect, useState} from 'react';

const Form = () =>
{
   const data={name:"",lname:"", email:"", password:"", number:"", date:"", country:""};
   const [inputData, SetInputData] = useState(data);
   const [flag, setFlag] = useState(false);
   useEffect(()=>{
          console.log("Registered");
   },[flag])

     function handleData(e){
        SetInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
     }
     function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || inputData.lname || !inputData.email || !inputData.password
             || !inputData.number || !inputData.date || !inputData.country){
            alert ("All fields are Mandatory")
        }
        else{
           setFlag(true);
        }
     }
    return (
    <>
        <pre>{(flag)? <h2 className='ui-define'>Hello {inputData.name}, You Have Registered
        </h2>: ""}</pre>
     <form className='container' onSubmit={handleSubmit}>
       <div className='header'>
         <h1>Registration Form</h1>     
       </div>
       <div>
          <input type='text' className='input' placeholder='Enter Your First Name' value={inputData.name} onChange={handleData} name='name'/>      
       </div>
       <div>
          <input type='text' className='input' placeholder='Enter Your Last Name' value={inputData.lname} onChange={handleData} name='lname'/>      
       </div>
       <div>
          <input type='email' className='input' placeholder='Enter Your Email' value={inputData.email} onChange={handleData} name='email'/>      
       </div>
       <div>
          <input type='password' className='input' placeholder='Enter Your Password' value={inputData.password} onChange={handleData} name='password'/>      
       </div>
       <div>
          <input type='tel' className='input' placeholder='Enter Your Number' value={inputData.number} onChange={handleData} name='number'/>      
       </div>
       <div>
          <input type='date' className='input' value={inputData.date} onChange={handleData} name='date'/>      
       </div>
       <div>
         <select name="country"  className='input' value={inputData.country} onChange={handleData}>
          <option value="">Select City</option>
          <option value="karachi">Karachi</option>
          <option value="lahore">Lahore</option>
          <option value="islamabad">Islamabad</option>
         </select>
       </div>
       <div>
         <button type='submit'>Submit</button>
       </div>
     
     </form>
    </>
  )
}

export default Form;