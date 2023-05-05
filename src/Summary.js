import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Summary = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const navigate = useNavigate()
    const {state} = useLocation();
    console.log(state);
    // const history = useHistory();

        useEffect(() => {
            let mounted = true;
           const changeData  =  () =>{
            if(mounted && state.show.id){
                setData(state);
                setIsPending(false);
            }
           }
           changeData();
            return () => {mounted = false};
          }, [id,state]);



    return (
        <div className="summary">
            {isPending && <div>Loading..</div>}
            {error && <div>{error}</div>}
            {data && (
            <article dangerouslySetInnerHTML={{ __html: data.show.summary }}>
            </article>
            )}
        </div>
      );
}
 
export default Summary;

