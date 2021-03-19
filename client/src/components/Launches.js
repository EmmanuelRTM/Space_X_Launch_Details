import React  from 'react'

import {
    useQuery,
    gql,
    NetworkStatus
} from "@apollo/client";

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY=gql`
query LaunchesQuery {
    launches{
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
}
`;

const Launches =()=>{
//const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    //console.log(useQuery(LAUNCHES_QUERY));

const { loading, error, data, networkStatus } = useQuery(
    LAUNCHES_QUERY
    //{notifyOnNetworkStatusChange:true}
);


//if (loading) return <p>Loading...</p>;
//if (error) return <p>Error :({console.log(data, loading, error)}</p>; 



if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
if (loading) return 'Loading...';
if (error) return `Error! ${error}`;

//console.log(data);
return <div>
    <h1 className="display-4 my-3">Launches</h1>
    <MissionKey/>
    {
    data.launches.map(launch =>(
        <LaunchItem key={launch.flight_number} launch={launch}/>
    ))
    }
    </div>
}

export default Launches;
