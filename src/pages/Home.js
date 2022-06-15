import React,{useContext} from 'react'
import { ReducerData } from '../api/ReducerContext'
const Home = () => {
    const {data} = useContext(ReducerData);
    console.log(data);
  return (
    <div>Home</div>
  )
}

export default Home