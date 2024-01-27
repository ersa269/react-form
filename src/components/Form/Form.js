import React, {useEffect, useState} from 'react';

const Form = () =>
{
   const data={name:"",lname:"", email:"", password:"", number:"", date:"", city:""};
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
             || !inputData.number || !inputData.date || !inputData.city){
            alert ("All fields are Mandatory")
        }
        else{
           setFlag(true);
        }
     }
   //   Select box function
     const [selectedOption, setSelectedOption] =useState('');
     const handleSelectChange =(e)=>{

      setSelectedOption(e.target.value);
     };
    return (
    <>
        <pre>{(flag)? <h2 className='ui-define'>Hello {inputData.name}, You Have Registered
        </h2>: ""}</pre>
       <form className='container' onSubmit={handleSubmit}>
       <div className='header'>
         <h1>Registration Form</h1>     
       </div>
       <div>
          <label htmlFor='name'>First Name</label><br/>
          <input type='text' id='name' className='input' placeholder='Enter Your First Name' value={inputData.name} onChange={handleData} name='name'/>      
       </div>
       <div>
          <label htmlFor='lname'>Last Name</label><br/>
          <input type='text' id='lname' className='input' placeholder='Enter Your Last Name' value={inputData.lname} onChange={handleData} name='lname'/>      
       </div>
       <div>
          <label htmlFor='email'>Email</label><br/>
          <input type='email' id='email' className='input' placeholder='Enter Your Email' value={inputData.email} onChange={handleData} name='email'/>      
       </div>
       <div>
          <label htmlFor='password'>Password</label><br/>
          <input type='password' id='password' className='input' placeholder='Enter Your Password' value={inputData.password} onChange={handleData} name='password'/>      
       </div>
       <div>
          <label htmlFor='number'>Number</label><br/>
          <input type='tel' id='number' className='input' placeholder='Enter Your Number' value={inputData.number} onChange={handleData} name='number'/>      
       </div>
       <div>
          <label htmlFor='date'>Date</label><br/>
          <input type='date' id='date' className='input' value={inputData.date} onChange={handleData} name='date'/>      
       </div>
       <div>
         <label htmlFor='city'>City</label><br/>
         <select name="city" id='city' className='input' value={selectedOption.city} onChange={handleSelectChange}>
          <option value="">Select City</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
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