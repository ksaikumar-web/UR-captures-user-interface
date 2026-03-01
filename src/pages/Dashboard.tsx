import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

function Dashboard(){

    const {user,logout} = useAuth();



    return (
        <div>
            {user ? (
            <div className="text-center text-green-700">
                <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
                <p>{user.username } you have Successfully logged in.</p>

                <Button onClick={logout} variant="primary">Logout</Button>
            </div>
            ):<div>
                <p className="text-center text-shadow-blue-700 text-4xl text-red-500 font-bold">Session Expired</p>
                <p className="text-center text-blue-400">Back to login page {" "}
                <Link to='/login' className="text-center text-blue-950 underline">Login</Link> </p>
                </div>
            }
        </div>
    )
}

export default Dashboard;