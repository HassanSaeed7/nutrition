// import React, { useState } from 'react'
// const API_ID = process.env.APP_ID
// const API_KEY = process.env.APP_KEY


// const API = {
//     fetchNutrition: async () => {
//         const endpoint = ` https://api.edamam.com/api/nutrition-details?app_id=${API_ID}&app_key=${API_KEY}`
//         return await (await fetch(endpoint)).json()
//     }
// }

// export const useFetchNutrition = () => {
//     const [nutrition, setNutrition] = useState({})

//     try {
//         const data = await API.fetchNutrition()
//         setNutrition( () => {data} )
//     } catch (error) {
        
//     }

  
  
  
//     return {nutrition}
// }
