import { useEffect } from "react";
import { useState } from "react";
import ShowDetails from "./ShowDetails";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [data,setData]=useState('');
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
    fetch(' https://api.tvmaze.com/search/shows?q=all')
    .then(res=>{
        if(!res.ok){
            throw error('could not fetch');
        }
        else{
            return res.json();
        }
    })
    .then((data)=>{
        setData(data);
        setIsPending(false);
        setError(null);
    })
    .catch(err=>{
        setError(err.message);
        setData(null);
        setIsPending(false);
    })
},[]);

    return (
        <div className="home">
            { error && <div>{error}</div> }
            { isPending && <div>Loading....</div> }
            { data && <ShowDetails data={data} /> }
        </div>
      );
}
 
export default Home;