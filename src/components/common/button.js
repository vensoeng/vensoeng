import { Link } from "react-router-dom";
export default function Button({ children, element = 'button', action = 'submit'}) {
    return (
        element === 'button' ? (
            <button type={action} className="btn">
                <p className="df-c">{children}</p>
            </button>
        ) : (
            <Link to={action} className="btn">
                <p className="df-c">{children}</p>
            </Link>
        )
    );
}