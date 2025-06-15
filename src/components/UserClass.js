import React, { Component } from 'react';

class UserClass extends Component {
    constructor(props) {
        // `super` is a reference to the parent class Component
        // It allows us to call the constructor of the parent class
        // and access its methods and properties
        // Call the parent constructor
        // This is necessary to access `this.props` in the constructor
        // and to initialize state if needed
        super(props);

        this.state = {
            // You can initialize state here if needed
            // count: 0,
            // count1: 1,

            userInfo:{
                name: "Dummy",
                location: "Unknown"
            }
        };
        console.log(this.props.name + " Child Constructor called");
    }

    async componentDidMount() {
        // This method is called after the component is mounted
        // It's a good place to fetch data or perform side effects or fetch API calls
        // You can access `this.props` here
        console.log(this.props.name + " Child Component did mount");

        const data = await fetch("https://api.github.com/users/ddr30492");
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo: json
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // This method is called after the component is updated
        // You can compare previous props and state with current props and state
        // to perform actions based on changes
        console.log("Child Component did update");
        // console.log("Previous Props:", prevProps);
        // console.log("Current Props:", this.props);
        // console.log("Previous State:", prevState);
        // console.log("Current State:", this.state);
    }

    componentWillUnmount() {
        // This method is called before the component is unmounted
        // It's a good place to clean up resources or cancel any ongoing operations
        console.log("Child Component will unmount");
    }
    render() {
        
        console.log("Child Render called");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className='class-container'>
                
                {/* <h2>Count: {this.state.count}</h2>
                <button onClick={() => {
                    // NEVER UPDATE THE STATE VARIABLE DIRECTLY
                    // this.state.count = 10; // This is incorrect and should not be done
                    // Update the state using setState
                    this.setState({ count: this.state.count + 1 });
                }
                }>Increment Count</button>
                <h2>Count: {this.state.count1}</h2> */}
                <h3>User Class Component</h3>
                <p>Name: {name}</p>
                <p>Location: {location}</p>
                <br></br>
                <img src={avatar_url} alt="User Avatar" style={{width: "100px", height: "100px", borderRadius: '10px'}} />
            </div>
        );
    }
}

export default UserClass;


/**
 * Mount Cycle of Class Component
 * 
 * Constructror called
 * Render Called
 * Component Did Mount Called
 * 
 * Update Cycle of Class Component
 * 
 * setState called
 * Render Called
 * 
 * Component Did Update Called
 * 
 */



// Not compare to react lifecycle methods to functional components
/**
 * Mount Cycle of Functional Component
 * 
 * Render Called
 * 
 * useEffect with empty dependency array called
 * 
 * Update Cycle of Functional Component
 * 
 * setState called
 * Render Called
 * 
 * useEffect with dependency array called
 */