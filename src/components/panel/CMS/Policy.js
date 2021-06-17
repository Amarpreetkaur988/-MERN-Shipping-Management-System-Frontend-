import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";

import Button from "../../common/Button/Button";
import { validatePolicy } from "../../../validations/cms";
import { addPolicy, getCMS } from "../../../actions/dashboardActions";
import "./styles.scss";

class Policy extends Component {
  constructor() {
    super();
    this.state = {
      editor: "",
      text: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("tizr_token");
    this.props.getCMS(token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dashboard.cms && nextProps.dashboard.cms.policy) {
      this.setState({
        text: nextProps.dashboard.cms.policy,
      });
    }
  }

  handleInit = (editor) => {
    this.setState({ editor });
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ text: data });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { text } = this.state;
    let result = validatePolicy(text);
    if (result) return toast.error(result);
    const token = localStorage.getItem("tizr_token");
    this.props.addPolicy(text, token);
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="add-about-wrapper"
         // style={{ marginLeft: this.props.collapsed ? "120px" : "320px" }}
        >
          <h5>Privacy Policy</h5>

          <hr />

          <div className="mt-4">
            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <form onSubmit={this.handleSubmit}>
                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.text}
                    onReady={(editor) => this.handleInit(editor)}
                    onChange={(event, editor) =>
                      this.handleChange(event, editor)
                    }
                  />

                  <Button
                    type="submit"
                    className="btn submit-btn shadow-none"
                    value="Update"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Policy.propTypes = {
  dashboard: PropTypes.object.isRequired,
  addPolicy: PropTypes.func.isRequired,
  getCMS: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { addPolicy, getCMS })(Policy);
