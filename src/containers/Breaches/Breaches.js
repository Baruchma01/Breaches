import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import BreachesList from "../../components/BreachesList/BreachesList";
import classes from "./Breaches.css";

const Dashboard = React.lazy(() => import(/* webpackChunkName: "Dashboard" */ '../../components/Dashboard/Dashboard'))
const BreachInfo = React.lazy(() => import(/* webpackChunkName: "BreachInfo" */ '../../components/BreacheInfo/BreachInfo'))

const Breaches = () => {
  const apiURL = "https://guard.io/v2/hiring/fe/breaches?offset=0";
  const [breaches, setBreaches] = useState([]);
  const [singleBreach, setSingleBreach] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("breach") !== null) {
      setShowModal(true);
    }
  }, []);

  const fetchData = async () => {
    try {
      const breaches = await axios.get(apiURL);
      if (breaches) {
        setBreaches(breaches.data.items);
      }
    } catch (error) { }
  };

  const breachClickHandler = (breachName) => {
    const breach = breaches.find((item) => item.Name === breachName);
    setSingleBreach(breach);
    localStorage.setItem("breach", JSON.stringify(breach));
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    localStorage.removeItem('breach');
  };

  return (
    <div className={classes.Breaches}>
      {
        showModal && (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard show={showModal} handleCloseModal={handleClose}>
              <BreachInfo breach={singleBreach} closeModalHandler={handleClose} />
            </Dashboard>
          </Suspense>
        )
      }
      <BreachesList
        breaches={breaches}
        clickHandler={(breachName) => breachClickHandler(breachName)}
      />
    </div>
  );
};

export default Breaches;
