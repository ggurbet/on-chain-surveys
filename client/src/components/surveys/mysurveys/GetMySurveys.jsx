import useFetch from "../../../hooks/useFetch"
import { useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faCheckDouble, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../../context/AuthContext"


const GetMySurveys = () => {

    const user = useContext(AuthContext);

    const created = user.user.username; 

    const { data, loading, error } = useFetch(`https://api.onchainsurveys.com/api/surveys/getmysurvey/${created}`);

    console.log(data);

    return (
        <div>
        <div className="userDetails">
            <div className="userContainer">
                <div className="sidebar">
                    <h2>Welcome {user.username}</h2>
                    <ul>
                        <li><FontAwesomeIcon icon={faRightLong} /><Link to={`/user/${user.user._id}`}> My Profile</Link></li>
                        <li><FontAwesomeIcon icon={faRightLong} /><Link to="#"> Update Password</Link></li>
                        <li><FontAwesomeIcon icon={faRightLong} /><Link to="/surveys/mysurveys"> My Surveys</Link></li>
                        <li><FontAwesomeIcon icon={faRightLong} /><Link to="#"> Survey History</Link></li>
                    </ul>
                </div>

                <div className="content">
                    <div className="surveyConten">
                    <div style={{overflowx:"auto"}}>
                            <table id="surveys">
                                 
                                <tr>
                                    <th>Survey Name</th>
                                    <th>Created</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th> 
                                </tr>
                               {data.map((x,i) => {
                                   return (
                                    <tr key={x._id}>
                                        <td><Link to={`/surveys/${x._id}`}>{x.surveyName}</Link></td>
                                        <td>{x.created}</td>
                                        <td>{x.startDate}</td>
                                        <td>{x.endDate}</td>
                                        <td>{x.status === 1 ? <FontAwesomeIcon style={{color:"limegreen"}} icon={faCheckDouble} /> : <FontAwesomeIcon style={{color:"#c31421"}} icon={faXmark} />  }</td> 
                                    </tr> 
                                   )
                               })}
                              
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default GetMySurveys;