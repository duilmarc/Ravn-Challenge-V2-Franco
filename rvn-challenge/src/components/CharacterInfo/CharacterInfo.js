import './Characterinfo.css';
import React from 'react'
import {withRouter} from 'react-router-dom';
import { DETAILLINFO } from './../../Apollo-Client/query'
import { useQuery } from '@apollo/client';

function UpperCaseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

const INFO = ({header, text}) => {
    return (
      <div className='info-content'>
        <h2 className="header">{header}</h2>
        <h2 className="text">{UpperCaseFirstLetter(text)}</h2>
        <hr />
      </div>
    )
}

const CharacterInfo = ({match:{params:{id}}}) => {
    const { data, loading, error } = useQuery(DETAILLINFO,{variables : {id : id }});
    if(error) return <p></p>;
    if( loading) return <p></p>;
    const detaillInfo = data.person 
    return(
        <>
            <div className="container-detail">
                <div className="title">General Information</div>
                <INFO header={"Eye Color"} text={detaillInfo.eyeColor}/>
                <INFO header={"Hair Color"} text={detaillInfo.hairColor}/>
                <INFO header={"Skin Color"} text={detaillInfo.skinColor}/>
                <INFO header={"Birth Year"} text={detaillInfo.birthYear}/>
                {
                    detaillInfo.vehicleConnection.vehicles.length > 0 ? 
                    <div className="title">Vehicles</div>
                    : 
                    <div className="title">No Vehicles Found </div>
                }
                {
                    detaillInfo.vehicleConnection.vehicles.map((vehicle) => (
                        <INFO key={vehicle.name} header={vehicle.name} text={''}/>
                    ))
                }
            </div>
        </>
    )
    
    
}

export default withRouter(CharacterInfo);