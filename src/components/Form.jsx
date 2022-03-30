import React, { useState } from 'react'
const id = import.meta.env.VITE_APP_ID
const key = import.meta.env.VITE_APP_KEY

const Form = ({parentCallback, inputCallback}) => {
  const [data, setData] = useState('')
 

  const handleChange = event => {
    setData(event.target.value.split(/\r?\n/))
  }

 
  console.log(data)
 



  const handleSubmit = (event) => {
    event.preventDefault(); 
    let url = 'https://api.edamam.com/api/nutrition-details?app_id=' + id + '&app_key=' + key;

    const headers = {
      "Content-Type": "application/json;charset=UTF-8", 
      "Access-Control-Allow-Origin": "*"
    }
    const payload = {
    "title": "string",
    "ingr": data
    
  }
    console.log(payload);

    fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload)
    }).then((res) => console.log(res))
    
  }

  
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='text'>Enter your Ingredients Here. Separate each ingredient with a new line.</label> 
        <textarea 
        required
        id='name'
        onChange={handleChange}
        rows="20" 
        placeholder={
    `e.g. 4 oz chicken breast
     1 cup rice
     half cup strawberries`
     }
     >

     </textarea>
     
        <button type="submit">Submit</button>
    </form>
  )
}

export default Form