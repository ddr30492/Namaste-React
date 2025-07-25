import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className="error container">
        <h1>404</h1>
        <p>Page Not Found</p>
        </div>
    );
}

export default Error;