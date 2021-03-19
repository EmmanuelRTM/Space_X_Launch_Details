import React from 'react';
import {
    useQuery,
    gql,
    NetworkStatus
} from "@apollo/client";

import classNames from 'classnames';
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom';
//import { parse } from 'graphql';

//mion 18 https://www.youtube.com/watch?v=DKzprvzbS14&t=204s

//unir esta madre + + 
const LAUNCH_QUERY_UNO=`
query LaunchQuery {
    launch(flight_number:
`;

const LAUNCH_QUERY_DOS=`){
        flight_number
        mission_name
        launch_year
        launch_success
        launch_date_local,
        rocket{
            rocket_id
            rocket_name
            rocket_type
        }
    }
}
`;

const Launch =(props)=>{
    let {flight_number } =props.match.params;
    flight_number=parseInt(flight_number);
    let LAUNCH_QUERY= gql(LAUNCH_QUERY_UNO+flight_number+LAUNCH_QUERY_DOS)

    const { loading, error, data, networkStatus} = useQuery(
        LAUNCH_QUERY,
        flight_number
        //this maybe be the problem...
        //{notifyOnNetworkStatusChange:true}
    );
    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if (loading) return 'Loading...';
    if (error) return `Error! ${error}`;
    const {mission_name, launch_success, launch_year, rocket:{rocket_id, rocket_name, rocket_type}} = data.launch;
    return <div>
        <h1 className="display-4 my-3">
            <span className="text-dark">Mission:</span>
            {' '}
            {data.launch.mission_name}
        </h1>
        <h4 className="mb-3">Launch Details</h4>
        <ul className="list-group">
            <li className="list-group-item">
                Flight_number: {flight_number}
            </li>
            <li className="list-group-item">
                Launch_year: {launch_year}
            </li>
            <li className="list-group-item">
                Mission_name: {mission_name}
            </li>
            <li className="list-group-item">
                Launch successful:{' '}
                <span className={classNames({
                'text-success': launch_success,
                'text-danger': !launch_success
                })}>
                    {launch_success ? "Yes" : "No"}
                </span>
            </li>
        </ul>

        <h4 className="my-3">Rocket Details</h4>
        <ul className="list-group">
            <li className="list-group-item">
                Rocket_ID: {rocket_id}
            </li>
            <li className="list-group-item">
                Rocket_name: {rocket_name}
            </li>
            <li className="list-group-item">
                Rocket_type: {rocket_type}
            </li>
        </ul>
        <Link to="/" className="btn btn-secondary">Back</Link>

    </div>
}

export default Launch
