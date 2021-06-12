import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchRentalById } from "actions";
import { capitalize } from "helpers/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RentalDetail extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchRentalById(id));
  }

  render() {
    const { rental } = this.props;
    return (
      <section id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
            <div className="col-md-6">
              <img src={rental.image} alt={rental.title} />
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <div className="rental">
                <h2 className={`rental-type type-${rental.category}`}>
                  {rental.shared ? "Shared" : "Whole"} {rental.category}
                </h2>

                <h1 className="rental-title">{rental.title}</h1>

                <h2 className="rental-city">{capitalize(rental.city)}</h2>
                <div className="rental-room-info">
                  <span>
                    {/* <i className="fa fa-building"></i> */}
                    <FontAwesomeIcon icon="building" color="blue" />{" "}
                    {rental.numOfRooms} bedrooms
                  </span>

                  <span>
                    <FontAwesomeIcon icon="users" color="green" />{" "}
                    {rental.numOfRooms + 4}{" "}
                    {/* <i className="fa fa-user"></i>  */}
                    guests
                  </span>

                  <span>
                    <i className="fa fa-bed"></i>
                    <FontAwesomeIcon icon="bed" color="red" />{" "}
                    {rental.numOfRooms + 2} beds
                  </span>
                </div>

                <p className="rental-description">{rental.description}</p>
                <hr />
                <div className="rental-assets">
                  <h3 className="title">Assets</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <span>
                        {/* <i className="fa fa-asterisk"></i> Cooling */}
                        <FontAwesomeIcon
                          icon="asterisk"
                          color="cadetblue"
                        />{" "}
                        Cooling
                      </span>
                      <span>
                        {/* <i className="fa fa-thermometer"></i>  */}
                        <FontAwesomeIcon
                          icon="thermometer"
                          color="cadetblue"
                        />{" "}
                        Heating
                      </span>
                      <span>
                        {/* <i className="fa fa-location-arrow"></i>  */}
                        <FontAwesomeIcon icon="tshirt" color="cadetblue" />
                        Iron
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span>
                        {/* <i className="fa fa-desktop"></i> */}
                        <FontAwesomeIcon
                          icon="laptop-house"
                          color="cadetblue"
                        />{" "}
                        Working area
                      </span>
                      <span>
                        {/* <i className="fa fa-cube"></i>  */}
                        <FontAwesomeIcon
                          icon="hand-sparkles"
                          color="cadetblue"
                        />{" "}
                        Washing machine
                      </span>
                      <span>
                        {/* <i className="fa fa-cube"></i>  */}
                        <FontAwesomeIcon icon="sink" color="cadetblue" />{" "}
                        Dishwasher
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ rental }) => ({ rental });

const RentalDetailWithRouter = withRouter(RentalDetail);
export default connect(mapStateToProps)(RentalDetailWithRouter);
