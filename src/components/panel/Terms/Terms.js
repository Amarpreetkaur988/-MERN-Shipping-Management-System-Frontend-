import React, { Component } from "react";
import "./styles.scss";
import { htmlToText } from 'html-to-text';
import { getCMS } from "../../../actions/dashboardActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Terms extends Component {
  constructor(props) {
    super(props);
    this.state = {
       text: "",
    };
  }
  
  componentDidMount() {
    const token = localStorage.getItem("tizr_token");
    this.props.getCMS(token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dashboard.cms && nextProps.dashboard.cms.terms) {
        const convertedText = htmlToText(nextProps.dashboard.cms.about, {
            wordwrap: false
          });
      this.setState({
        text: convertedText,
      });
    }
  }

  render() {
    return (
      <div className="container-fluid policy">
        <div className="row mx-0">
          <div className="col-md-12 px-0">
            <h4>Terms & Conditions</h4>
            <hr />
          </div>
          <div className="col-md-12 px-0">
            {console.log("text===", this.state.text)}
            <p>{this.state.text}</p>
           
          </div>
        </div>
      </div>
    );
  }
}
Terms.propTypes = {
  dashboard: PropTypes.object.isRequired,
  getCMS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { getCMS })(Terms);
