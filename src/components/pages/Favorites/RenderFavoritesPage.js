import React from 'react';

import './Favorites.css';

function RenderFavoritesPage({
  userLocations,
  locations,
  isShown,
  setIsShown,
}) {
  return (
    <>
      {userLocations ? (
        <div className="favorite">
          {userLocations.map(location => (
            <div key={location.id}>
              <h3
                className="cities"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              >
                {location.city}
              </h3>
              {isShown && (
                <div className="data">
                  {locations.map(city => (
                    <div key={city.id}>
                      <div>
                        <h4>Crime</h4>
                        <p>{city.crime_data}</p>
                      </div>
                      <div>
                        <h4>Population</h4>
                        <p>{city.population}</p>
                      </div>
                      <div>
                        <h4>Cost of Living</h4>
                        <p>{city.cost_of_living}</p>
                      </div>
                      <div>
                        <h4>Rental Rates</h4>
                        <p>{city.rental_rates}</p>
                      </div>
                      <div>
                        <h4>Walk Rate</h4>
                        <p>{city.walk_score}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>Fetching Info...</div>
      )}
    </>
  );
}

export default RenderFavoritesPage;
