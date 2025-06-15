import React from 'react';
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Component Constructor called", this.props);
  }
  componentDidMount() {
    console.log("Parent About Component did mount", this.props);
  }
  render() {
    console.log("Parent About Component Render called", this.props);
    return (
      <div className="about container">
        <br></br>
        <h1>About Us</h1>
        <p>
          Welcome to our restaurant! We are dedicated to providing you with the best dining experience.
          Our chefs use only the freshest ingredients to create delicious dishes that will tantalize your taste buds.
        </p>
        <p>
          Whether you're here for a casual meal or a special occasion, we strive to make every visit memorable.
          Thank you for choosing us!
        </p>
        <br></br>
        <br></br>
        <User name={'Deep Darji'} age={33} location={"Ahmedabad Function"} />
        {/* <UserClass name={'Deep Darji'} age={33} location={"Ahmedabad Class"} /> */}
        {/* <UserClass name={'Mitesh Sathvara'} age={33} location={"Kherva Class"} /> */}
      </div>
    );
  }
}
export default About;