import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import "react-tagsinput/react-tagsinput.css";
// import ImageUploader from "react-images-upload";

import Button from "../../common/Button/Button";
import FormInput from "../../common/Form-Input/FormInput";
import { validateFAQ } from "../../../validations/faq";
import { postSubFAQ, allFAQ } from "../../../actions/dashboardActions";
import "./styles.scss";

class AddSubFAQ extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      editor: "",
      question: "",
      answer: "",
      coverImages: [],
      coverUrls: [],
      logoImages: [],
      logoUrls: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwtToken");
    this.props.allFAQ(token, 1, 1000);
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

  coverOnDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({ coverImages: pictureFiles, coverUrls: pictureDataURLs });
  };

  logoOnDrop = (pictureFiles, pictureDataURLs) => {
    this.setState({ logoImages: pictureFiles, logoUrls: pictureDataURLs });
  };

  handleFAQChange = (e) => {
    this.setState({ id: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { id, coverImages, logoImages, question, answer } = this.state;

    const result = validateFAQ(question, answer);
    if (result) return toast.error(result);

    const faq = new FormData();

    faq.append("coverImages", coverImages[0]);
    faq.append("logoImages", logoImages[0]);
    faq.append("id", id);
    faq.append("question", question);
    faq.append("answer", answer);

    const token = localStorage.getItem("jwtToken");
    this.props.postSubFAQ(faq, token);

    this.setState({
      editor: "",
      question: "",
      answer: "",
      coverImages: [],
      coverUrls: [],
      logoImages: [],
      logoUrls: [],
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="add-faq-wrapper">
          <h5>Add Sub FAQ</h5>

          <hr />

          <div className="mt-4">
            <div className="row mx-0">
              <div className="col-md-12 px-0">
                <form
                  onSubmit={this.handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="row mx-0">
                    <div className="col-md-6 px-0">
                      <h6 className="text-center">Upload Cover Image</h6>
                      {/* <ImageUploader
                        withIcon={true}
                        buttonText="Choose image"
                        onChange={this.coverOnDrop}
                        imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
                        maxFileSize={5242880}
                      /> */}
                      <div className="row mx-0">
                        {this.state.coverUrls &&
                          this.state.coverUrls.length > 0 &&
                          this.state.coverUrls.map((url) => (
                            <div className="col-md-3" key={url}>
                              <img
                                src={url}
                                width="100"
                                height="80"
                                style={{ marginBottom: "20px" }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                    <div className="col-md-6 pr-0 mx-auto">
                      <h6 className="text-center">Upload Logo</h6>
                      {/* <ImageUploader
                        withIcon={true}
                        buttonText="Choose image"
                        onChange={this.logoOnDrop}
                        imgExtension={[".jpg", ".jpeg", ".gif", ".png"]}
                        maxFileSize={5242880}
                      /> */}
                      <div className="row mx-0">
                        {this.state.logoUrls &&
                          this.state.logoUrls.length > 0 &&
                          this.state.logoUrls.map((url) => (
                            <div className="col-md-3" key={url}>
                              <img
                                src={url}
                                width="100"
                                height="70"
                                style={{ marginBottom: "20px" }}
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="row mx-0">
                    {this.state.urls &&
                      this.state.urls.length > 0 &&
                      this.state.urls.map((url) => (
                        <div className="col-md-3" key={url}>
                          <img
                            src={url}
                            width="200"
                            height="150"
                            style={{ marginBottom: "20px" }}
                          />
                        </div>
                      ))}
                  </div>

                  <div className="form-group">
                    <select
                      name="faq"
                      className="form-control shadow-none"
                      value={this.state.id}
                      onChange={this.handleFAQChange}
                    >
                      <option value="">Select FAQ</option>
                      {this.props.dashboard.faq &&
                        this.props.dashboard.faq.length > 0 &&
                        this.props.dashboard.faq.map((f) => (
                          <option key={f._id} value={f._id}>
                            {f.question}
                          </option>
                        ))}
                    </select>
                  </div>

                  <FormInput
                    icon="fa fa-user icon"
                    size="15px"
                    type="text"
                    name="question"
                    placeholder="Question"
                    value={this.state.question}
                    handleChange={this.handleInputChange}
                  />

                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.answer}
                    onInit={(editor) => this.handleInit(editor)}
                    onChange={(event, editor) =>
                      this.handleChange(event, editor)
                    }
                  />

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

AddSubFAQ.propTypes = {
  dashboard: PropTypes.object.isRequired,
  postSubFAQ: PropTypes.func.isRequired,
  allFAQ: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
});

export default connect(mapStateToProps, { postSubFAQ, allFAQ })(AddSubFAQ);
