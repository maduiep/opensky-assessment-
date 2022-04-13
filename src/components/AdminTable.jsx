import React, {useEffect, useState} from 'react'
import axios from 'axios'
import * as ReactBootStrap from 'react-bootstrap'

const AdminTable = () => {
  
const [flightDetails, setFlightDetails] = useState([])

useEffect(() => {
  getdata();
}, [])

  const getdata = () => {
    axios('https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800')
    .then(res => setFlightDetails(res.data));
    console.log(flightDetails);
  }

 
 
  return (
    <ReactBootStrap.Table striped bordered hover className="welcome">
        <thead>
            <tr>
            <th>Airport</th>
            <th>Arriving Time</th>
            <th>Arrival</th>
            <th>Departing Time</th>
            <th>Departure</th>
            </tr>
        </thead>
        <tbody>
            {flightDetails.map((items,i) => {
                return(
                  <>
                    <tr key={i}>
                      <td>{items.icao24}</td>
                      <td>{items.firstSeen}</td>
                      <td>{items.estArrivalAirport}</td>
                      <td>{items.lastSeen}</td>
                      <td>{items.estDepartureAirport}</td>
                    </tr>
                  </>
                )
              })}
        </tbody>
    </ReactBootStrap.Table>
  )
}

export default AdminTable