import React from "react";
import logo from "../src/images/logo.png";

const Domain = () => {
  return (
    <>
      <section class="domain">
        <div class="blog-section">
          <h1 class="section-title pt-4">Domains Details</h1>
          <div class="post-container">
            <div class="post">
              <h2 class="post-title">Mechanical</h2>
              {/* <p class="post-date">Published on Date 1</p> */}
              <p class="post-content">
                The mechanical domain in engineering involves the design,
                development, and testing of mechanical systems and components.
                This includes the creation of mechanical parts and structures,
                as well as the use of various materials and manufacturing
                processes to produce those parts. The key responsibilities in
                this domain include analyzing mechanical systems, developing and
                testing prototypes, and ensuring that mechanical components meet
                design specifications and performance requirements
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="post">
              <h2 class="post-title">Electrical</h2>
              {/* <p class="post-date">Published on Date 2</p> */}
              <p class="post-content">
                In electrical domain we design the onboard computer and decide
                which sensors should be used to collect data about the craft or
                environment around it.Designing the CubeSat's power system,
                including the selection of batteries, solar panels, and power
                management units.Integrating and testing the CubeSat's
                communication systems, including the antennas, transceivers, and
                modems.Participating in the testing and verification of the
                CubeSat, including ground and flight tests.
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="post">
              <h2 class="post-title">Instrumentation</h2>
              {/* <p class="post-date">Published on Date 2</p> */}
              <p class="post-content">
                Our instrumentation domain basically focuses on sensors , i.e
                what sensors would be appropriate and produce most effective
                results considering payload, atmosphere and space. After
                consideration of sensors,our work is to design and optimise
                appropriate payload and along with these tasks our work is to
                testing and implementation of all this.deals with the sensors
                and the members associated with this domain are exposed to the
                interfacing of different sensors & it's current technology.
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="post">
              <h2 class="post-title">Telecommunication</h2>
              {/* <p class="post-date">Published on Date 2</p> */}
              <p class="post-content">
                Our Instrumentation will be mainly focus on three subsystems.
                Namely, Sensors, Payload & Science. Sensor people will be
                finding appropriate sensors, to collect data from the space
                environment and how relay it back to earth so we can process and
                use that data. Payload people will be researching and deciding
                our aim in LEO so we can contribute to science. it will be
                an outcome of our mission after a successful launch into LEO.
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="post">
              <h2 class="post-title">Software</h2>
              {/* <p class="post-date">Published on Date 2</p> */}
              <p class="post-content">
                Designing and developing software for the CubeSat's on-board
                computer, which is responsible for controlling various systems
                such as communications, power, and attitude control.Implementing
                telemetry and telecommand protocols to allow ground stations to
                communicate with the CubeSat.Documenting software design and
                implementation to ensure that the code can be easily maintained
                and modified by future team members
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            <div class="post">
              <h2 class="post-title">GN&C</h2>
              {/* <p class="post-date">Published on Date 2</p> */}
              <p class="post-content">
                The Guidance, Navigation, and Control Subsystem people will be
                responsible for controlling the position, trajectory, and
                attitude (i.e., orientation) of the satellite. GN&C will also be
                responsible for Orbit maneuvers, Simulation & Failure mode
                analysis. ADCS’s main motive will be to keep all subsystems on
                board in operational mode by taking entry as sensor data and
                output as actuators.it control the balance and minimize the effect of vibration.
              </p>
              <a href="#" class="read-more">
                Read More
              </a>
            </div>
            {/* <!-- Add more posts as needed --> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Domain;
