import React,{useContext} from 'react'
import { ReducerData } from '../api/ReducerContext'
import Card from '../shopComponets/Card';
import Layout from '../shopComponets/Layout';
const Home = () => {
    const {data} = useContext(ReducerData);
    console.log(data);
  return (
    <div>
       <Card/>
    </div>
  )
}

export default Home