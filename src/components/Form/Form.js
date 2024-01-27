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
             || !inputData.number || !inputData.date){
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
   // End Select box function
      
   //   CheckBox Function
      const [isChecked, setIsChecked] = useState('');
      const handleCheckboxChange = () => {
         setIsChecked(!isChecked);
       };    
   // End  CheckBox Function

   // Radio Button
   const[isRadio, setIsRadio] = useState('');
   const handleRadioChange =() =>{
      setIsRadio(isRadio);
   };
   //End  Radio Button
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
        <h4>Languages</h4>
         <label htmlFor='html'>Html</label>
         <input type='checkbox' id='html' name='html' value={isChecked.html} onChange={handleCheckboxChange} />
         <label htmlFor='css'>Css</label>
         <input type='checkbox' id='css' name='css' value={isChecked.css} onChange={handleCheckboxChange}/>
         <label htmlFor='javascript'>Javascript</label>
         <input type='checkbox' id='javascript' name='javascript' value={isChecked.javscript} onChange={handleCheckboxChange}/>
         <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p>
       </div>
       <div>
         <h4>Gender</h4>
         <label htmlFor='male'>Male</label>
         <input type='radio' id='male' name='male' value={isRadio.male} onChange={handleRadioChange}/>
         <label htmlFor='female'>Female</label>
         <input type='radio' id='female' name='female' value={isRadio.female} onChange={handleRadioChange}/>
         <p>Selected option: {isRadio}</p>
       </div>
       <div>
         <button type='submit'>Submit</button>
       </div>
     
     </form>
    </>
  )
}

export default Form;