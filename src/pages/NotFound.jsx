import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="">
          <div className=" ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p
                  style={{
                    textTransform: "capitalize",
                    marginTop: "5px",
                    fonSsize: "1.3rem",
                  }}
                >
                  the page you are looking for not available!
                </p>

                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    marginTop: "10px",
                    border: "1px solid #000",
                    background: "#000",
                    color: " #fff",
                    padding: "4.5px 18px",
                  }}
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
