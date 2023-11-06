import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch"
import "./Featured.css"
import {CircularProgress} from '@material-ui/core'
const Featured=()=>{
    const navigate=useNavigate();
    const {data,loading,error}=useFetch("/hotels/countByCity?cities=Puri,Bhubaneswar,Balasore")

    const handleclick=()=>{
        navigate("/hotels/Puri")

    }
    const handleclick1=()=>{
        navigate("/hotels/Bhubaneswar")
        
    }
    const handleclick2=()=>{
        navigate("/hotels/Balasore")
        
    }
    
    return(
        <div className="featured">
            
            { loading ? < CircularProgress/> :(<><div className="featuredItem">
                <img src="https://img.itinari.com/pages/images/original/95ce94d2-7abd-43fa-a025-bfd1bd6516d6-istock-1207097281.jpg?ch=DPR&dpr=2.625&w=1600&s=2007aee94ad8e6fb6e52be77192ed170" alt="" 
                className="featuredImg"
                onClick={handleclick}
                 />
                <div className="featureTitles">
                    <h1>Puri</h1>
                    <h2>{data[0]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://img.veenaworld.com/wp-content/uploads/2020/11/10-Tourist-Places-to-Visit-in-Bhubaneswar.jpg" alt="" className="featuredImg"onClick={handleclick1} />
                <div className="featureTitles">
                    <h1>Bhubaneswar</h1>
                    <h2>{data[1]} Properties</h2>


                </div>

                
            </div>
            <div className="featuredItem">
                <img src="https://odishabytes.com/wp-content/uploads/2022/08/chandipur.jpg" alt="" className="featuredImg" onClick={handleclick2} />
                <div className="featureTitles">
                    <h1>Balasore</h1>
                    <h2>{data[2]} Properties</h2>


                </div>

                
            </div></>)}
            
        </div>
    )
}
export default Featured