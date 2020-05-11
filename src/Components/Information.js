import React from 'react';
import styles from './ComponentCss/InformationCss.module.css';
import CountUp from 'react-countup';

const Information = (props) => {
    if( props.data.confirmed === '' ){
 
       return  <div className = {styles.loading}>loading..</div>
    }


    return(
        
        <div className={styles.gridContainer}>
            <div className={styles.gridItem1}>
                <h4>Total infected</h4>
                <h1 style={{color: "black"}}>
                <CountUp
                start = {0}
                end = {props.data.confirmed}
                duration = {2}
                separator = ","
                />
                </h1>
                <h3> {new Date(props.data.lastUpdate).toDateString()}</h3>
                <h6>Number of active cases of covid19</h6>
            </div>

            <div className={styles.gridItem2}>
            <h4>Total Recovered</h4>
                <h1 style={{color: "black"}}> <CountUp
                start = {0}
                end = {props.data.recovered}
                duration = {2}
                separator = ","
                /></h1>
                <h3>{new Date(props.data.lastUpdate).toDateString()}</h3>
                <h6>Number of recovered cases of covid19</h6>
            </div>

            <div className={styles.gridItem3}>
            <h4>Total Death</h4>
                <h1 style={{color: "black"}}> <CountUp
                start = {0}
                end = {props.data.deaths}
                duration = {2}
                separator = ","
                /></h1>
                <h3> { new Date(props.data.lastUpdate).toDateString()}</h3>
                <h6>Number of Death cases of covid19</h6>
            </div>
        </div> 
    )
}

export default Information;