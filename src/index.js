import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      review: '',
      commentApproved: false
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const review = target.review;

    this.setState({
      [name]: value,
      [review]: value
    });
  }

  handleSubmit(event) {
    alert("The name submitted was: " + this.state.commentApproved);
    event.preventDefault;
  }

  render() {
    return (
      <form className="experienceForm" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" className="nameInput" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Review:
          <textarea name="review" className="reviewInput" rows="5" value={this.state.review} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <ExperienceForm />,
  document.getElementById('root')
);
