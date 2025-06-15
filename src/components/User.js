import { useEffect, useState } from "react";
const User = (props) => {
    const [count, setCount] = useState(0);
    const [count1] = useState(1);
    const { name, age, location } = props;

    useEffect(() => { 
        // This will run only once when the component mounts
        // console.log("User component mounted");
        console.log("Useeffect called in User component");
        const timer = setInterval(() => {
            console.log("Interval running in User component");
        }, 1000);
        // You can also return a cleanup function here if needed
        return () => {
            // console.log("User component unmounted");
            clearInterval(timer);
            console.log("Use effect cleanup in User component");
        };
    }
    , []); // Empty dependency array means this effect runs once

    console.log("User component rendered");
    return (
        <div className="function-container">
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <h2>Count: {count1}</h2>

            <h3>User Component Function</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
}
export default User;