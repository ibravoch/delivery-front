import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveryback-app.herokuapp.com"
      );
      console.log(response.data);
      setData(response.data);
      setIsloading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {isloading === true ? (
        <h1>En cours chargement</h1>
      ) : (
        <div className="App">
          <div className="header">
            <div>
              <h1>{data.restaurant.name}</h1>
              <h3>{data.restaurant.description} </h3>
            </div>
            <img src={data.restaurant.picture} />
          </div>
          <div className="main">
            {data.categories.map((categ, index) => {
              return (
                <div key={index}>
                  {categ.name}
                  <div className="category">
                    {categ.meals.map((categ) => {
                      return (
                        <div className="Menu">
                          <div className="descrip">
                            <h2>{categ.title}</h2>
                            <p>{categ.description}</p>
                            <li>{categ.price}</li>
                          </div>
                          <div>
                            <img src={categ.picture} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
