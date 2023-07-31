import React, { useContext } from "react";

const About = () => {
  return (
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About QuickJot
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              The <strong>QuickJot</strong> is a modern and intuitive web
              application designed to streamline the process of taking,
              managing, and organizing notes. Built using the popular MERN stack
              (MongoDB, Express.js, React, and Node.js), this powerful
              application offers a seamless user experience, combining a sleek
              user interface with robust backend functionality.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Key Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>(1) User Authentication:</strong> Users can securely
              register and log in to the app using their email. This ensures
              that each user's notes remain private and accessible only to them.
              <br></br>
              <strong>(2) Create, Edit, and Delete Notes:</strong> Users can
              effortlessly create new notes, edit existing ones, and delete
              notes they no longer need. The app provides a user-friendly
              interface for writing and organizing notes.<br></br>
              <strong>(3) Secure and Scalable:</strong> The app is built with
              security in mind, utilizing encryption and best practices to
              safeguard user data. It is also designed to be scalable, allowing
              for potential future expansion and handling a growing user base.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Technology Used
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>(1) MongoDB:</strong> As the database, MongoDB provides a
              flexible and scalable solution for storing and retrieving notes
              and user data.<br></br>
              <strong>(2) Express.js:</strong> Express.js is used to build the
              backend API, handling requests and managing user authentication.
              <br></br>
              <strong>(3) React:</strong> The frontend of the app is built with
              React, providing a dynamic and responsive user interface.<br></br>
              <strong>(4) Node.js:</strong> Node.js is used as the runtime
              environment for the server-side application.<br></br>
              <strong>(5) CSS Framework (e.g., Bootstrap):</strong> A CSS
              framework is employed to ensure a visually appealing and
              consistent design.<br></br>
              <strong>(6) JWT (JSON Web Tokens):</strong> JWT is used for secure
              user authentication and session management.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
