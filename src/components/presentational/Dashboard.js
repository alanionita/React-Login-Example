import React from "react";

const Dashboard = props => {
  return (
    <section className="container">
      <section className="header-container">
        <div className="header-context row">
          <div>
            <h2>Hello Alan!</h2>
            <p>Verified user</p>
          </div>
          <i className="icon avatar" />
        </div>
      </section>
      <section className="notification row">
        <i className="icon-mini notification-icon" />
        <p>
          You have access to this page for 15 days. If you want more - subscribe
          to The Real You
        </p>
        <i className="icon-mini close-icon" />
      </section>
      <section>
        <div className="row dashboard-cards">
          <div className="card-mini">
            <i className="icon download-certificate" />
            <p>Download Certificate</p>
          </div>
          <div className="card-mini">
            <i className="icon personal-details" />
            <p>Personal Details</p>
          </div>
          <div className="card-mini">
            <i className="icon notifications-icon" />
            <p>Notifications</p>
          </div>
        </div>
        <div className="row dashboard-cards">
          <div className="card-mini">
            <i className="icon find-data-about-you-icon" />
            <p>Find Data About You</p>
          </div>
          <div className="card-mini">
            <i className="icon find-data-about-others-icon" />
            <p>Find Data About Others</p>
          </div>
          <div className="card-mini">
            <i className="icon real-you-icon" />
            <p>Find The Real You</p>
          </div>
        </div>
      </section>
      <footer className="row footer">
        <a href="">Spotlite</a>
        <a href="">Privacy Policy</a>
      </footer>
    </section>
  );
};

export default Dashboard;
