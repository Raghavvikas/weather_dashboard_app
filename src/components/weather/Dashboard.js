import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Dashboard = ({ weatherData }) => {
    // destructured the values of the props received from the SEARCH component
    const { temprature, img, humidity, feelslike, windSpeed } = weatherData;
    return (
        <>
            {
                // conditional rendering, if temprature has some value in it, means all the other fields also filled. And if so, then all the data will be rendered else empty string as dashboard will blank.
                weatherData?.temprature > 0 ? (
                    <div className='wrapper'>
                        <div className='temp'>
                            <div className='weather'>

                                <img src={img} alt='' />
                                <p className='city-temp'>{temprature}<span>&#x2103;</span></p>
                                <p className='desc'><span>FeelsLike:</span> {feelslike}&#x2103;</p>
                            </div>
                        </div>

                        <div className='data'>

                            <div className=' humidity'>
                                <FontAwesomeIcon icon={faWater} id='icon' />
                                <div className='text'>
                                    <div className='info-humidity'><span>{humidity}%</span>
                                    </div>
                                    <p>Humidity</p>
                                </div>
                            </div>

                            <div className=' wind'>
                                <FontAwesomeIcon icon={faWind} id='icon2' />
                                <div className='text'>
                                    <div className='info-wind'><span>{windSpeed}km/h</span>
                                    </div>
                                    <p>Wind Speed</p>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : (
                    ""
                )
            }

        </>
    )
}

export default Dashboard;
