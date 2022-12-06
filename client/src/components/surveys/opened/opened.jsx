
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong, faCheckDouble, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';


const Opened = () => {

    const user = useContext(AuthContext);

    const {data, loading, error} = useFetch(`https://api.onchainsurveys.com/api/surveys/opened/1`)
  
    return (
        <div>
            <div className="userDetails">
                <div className="userContainer">
                    <div className="sidebar">
                        <h2>Welcome {user.username}</h2>
                        <ul>
                            <li><FontAwesomeIcon icon={faRightLong} /><Link to={`/user/${user._id}`}> My Profile</Link></li>
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
                                        <tr>
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

export default Opened;