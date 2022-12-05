import React from "react";
import Footer from "../Components/Home/Footer";
import Nav from "../components/Home/Nav";

export default function exp() {
  return (
    <div>
      <div className="Nav-bar">
        <Nav />
      </div>
      <div className="intro">
        <div className="text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </p>
        </div>
        <div className="btn">
          <button className="btn btn-info">MY PROJECT</button>
        </div>
      </div>
      <div className="container info gap-5">
        <div className="box">
          <h3>01</h3>
          <h3>CMU</h3>
          <h3>Certificate</h3>
          <div className="box-img">
            <img src="/cmu.png" alt="cmu" />
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
          </p>
        </div>
        <div className="box">
          <h3>02</h3>
          <h3>DevLab</h3>
          <h3>Certificate</h3>
          <div className="box-img">
            <img
              src="/certificate.png"
              alt="cmu"
              width="314px"
              height="200px"
            />
          </div>
          <p>
            Dev lab is a website for practicing programming problems. If you
            pass 20 or more questions, you will get a certificate.
          </p>
        </div>
        <div className="box">
          <h3>03</h3>
          <h3>IEEE</h3>
          <h3>Certificate</h3>
          <div className="box-img">
            <img src="/ieee.png" alt="cmu" />
          </div>
          <p>
            This project is about making toys for children. Inside is just a
            pure logic gate circuit. There is an additional part called CPLD
            which uses Verilog to write.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
