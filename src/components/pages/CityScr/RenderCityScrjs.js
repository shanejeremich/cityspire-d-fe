import React from 'react';
import { FaHeart } from 'react-icons/fa';

function RenderCityScr({ locations, input }) {
  return (
    <div>
      {locations === undefined ? (
        ''
      ) : (
        <div className="livability-container">
          <div className="main-score">
            <h1>{input}</h1>
            <button>
              <FaHeart size="30px" color="red" />
            </button>
          </div>
          <div className="sub-scores">
            {locations.map(data => (
              <div key={data.id}>
                <div>
                  <h4>Crime</h4>
                  <p>{data.crime_data}</p>
                </div>
                <div>
                  <h4>Population</h4>
                  <p>{data.population}</p>
                </div>
                <div>
                  <h4>Cost of Living</h4>
                  <p>{data.cost_of_living}</p>
                </div>
                <div>
                  <h4>Rental Rates</h4>
                  <p>{data.rental_rates}</p>
                </div>
                <div>
                  <h4>Walk Rate</h4>
                  <p>{data.walk_score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RenderCityScr;
