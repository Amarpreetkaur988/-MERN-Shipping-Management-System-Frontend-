import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import VienRadio from "../../common/Radio/Radio";
import Button from "../../common/Button/Button";
import FormInput from "../../common/Form-Input/FormInput";
import Radio from "../../common/Radio/Radio";
// import { validateFAQ } from "../../../validations/cms";
import { postFAQ } from "../../../actions/dashboardActions";
import "./styles.scss";

class AddFAQ extends Component {
  constructor() {
    super();
    this.state = {
      editor: "",
      question: "",
      answer: "",
      status: "Active",
      activeBtn: true,
      inactiveBtn: false,
    };
  }

  handleInit = (editor) => {
    this.setState({ editor });
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ answer: data });
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioChange = (status) => {
    if (status === "Active") {
      this.setState({ status, activeBtn: true, inactiveBtn: false });
    } else {
      this.setState({ status, activeBtn: false, inactiveBtn: true });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { question, answer, status } = this.state;

    // let result = validateFAQ(question, answer);
    // if (result) return toast.error(result);

    let faq = {
      question,
      answer,
      status,
    };

    const token = localStorage.getItem("jwtToken");
    this.props.postFAQ(faq, token);

    this.setState({
      editor: "",
      question: "",
      answer: "",
      status: "Active",
      activeBtn: true,
      inactiveBtn: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-faq-wrapper">
          <h5>Add FAQ</h5>

          <hr />

          <div className="mt-4">
            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <form
                  onSubmit={this.handleSubmit}
                  encType="multipart/form-data"
                >
                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="text"
                    name="question"
                    placeholder="Question"
                    value={this.state.question}
                    handleChange={this.handleInputChange}
                  />

                  {/* <div className="form-group">
                    <TagsInput
                      value={this.state.tags}
                      onChange={this.handleTagsChange}
                    />
                  </div> */}

                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.answer}
                    onInit={(editor) => this.handleInit(editor)}
                    onChange={(event, editor) =>
                      this.handleChange(event, editor)
                    }
                  />

                  <div className="form-group mt-3">
                    <label className="status-label">Status</label>
                    <VienRadio
                      name="status"
                      text="Active"
                      checked={this.state.activeBtn}
                      handleChange={this.handleRadioChange}
                    />
                    <VienRadio
                      name="status"
                      text="Inactive"
                      checked={this.state.inactiveBtn}
                      handleChange={this.handleRadioChange}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn submit-btn shadow-none"
                    value="Add"
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

AddFAQ.propTypes = {
  dashboard: PropTypes.object.isRequired,
  postFAQ: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { postFAQ })(AddFAQ);
