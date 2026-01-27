import React, { useState, useEffect } from "react";

const Preloader = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate loading time (e.g., fetching data)
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust the delay as needed
    }, []);


  return loading ? (
    <div>
      <div className="preloader">
        <div className="spinner"></div>
      </div>
    </div>
  ) : null;
}

export default Preloader
