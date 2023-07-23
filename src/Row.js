// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from './axios';


// function Row({title,fetchUrl}) {
//     const [movies, setmovies] = useState([]);



//     // useEffect(() => {
//     //   async function fetchData() {
//     //      const req=await axios.post(fetchUrl);
//     //      setmovies(req.data.results);
//     //      return req;
//     //   }
//     //   fetchData();
//     // }, [fetchUrl])
//     useEffect(()=>{
//       axios.get(fetchUrl).then((res)=>{
//         console.log("my data",res)
//       })
//     },[])
   
//     return (
//       <div className='row'>
//         <h2>{title}</h2>
//     </div>
//   )
// }

// export default Row


import axios from 'axios'
import "./Row.css"
import React, { useEffect } from 'react'
import { useState } from 'react'

const baseURL="https://image.tmdb.org/t/p/original/";
const Row = (props) => {
  const [movies, setmovies] = useState([])

  useEffect(()=>{
    // console.log("my url",props.fetchUrl);
   
    axios.get(props.fetchUrl).then((res)=>{
      // console.log(res)
      // console.log("my data",res.data.results);
      setmovies(res.data.results);

    }).catch((err)=>{
      console.log("error",err);
    })

  },[])
  return (
    <div className='row'>
      <h1>
        {props.title}
      </h1>

      <div className="row_posters">
         {movies.map(movie=>(

            <img key={movie.id} className={props.isLargeRow ? "row_posterLarge":"row_poster"} src={`${baseURL}${props.isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
          

         ))}
      </div>
    </div>
  )
}

export default Row