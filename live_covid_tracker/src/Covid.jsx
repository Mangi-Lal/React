import React,{useEffect,useState} from 'react';

const Covid = () => {
  const [Data, setData] = useState([]);
  const getCovidData = async () =>{
    const res = await fetch('https://data.covid19india.org/data.json');
    const actualData = await res.json();
    // console.log(actualData.statewise[0]);
    setData(actualData.statewise[0]);
  }
  useEffect(() => {
    getCovidData();
  }, [])
  
  return (
    <>
    <section>
    <h1> 🔴 LIVE </h1>
    <h2>COVID-19 CORONAVIRUS TRACKER </h2>
    <ul>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> OUR </span> COUNTRY </p>
            <p className="card__total card__small">INDIA</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> TOTAL </span> RECOVERED </p>
            <p className="card__total card__small">{Data.recovered}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
            <p className="card__total card__small">{Data.confirmed}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> TOTAL </span> DEATHS </p>
            <p className="card__total card__small">{Data.deaths}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> TOTAL </span> ACTIVE </p>
            <p className="card__total card__small">{Data.active}</p>
          </div>
        </div>
      </li>
      <li className="card">
        <div className="card__main">
          <div className="card__inner">
            <p className="card__name"><span> LAST </span> UPDATED </p>
            <p className="card__total card__small">{Data.lastupdatedtime}</p>
          </div>
        </div>
      </li>
    </ul>
    </section>
    </>
  )
}

export default Covid;