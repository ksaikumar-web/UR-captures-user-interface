import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";
import api from "../api/axiosInstance";
import Dashboard from "./Dashboard";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fieldError, setFieldError] = useState("");
  // const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login,loading,error,logout,user} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError("");
    setSuccess(false);

    if (!username.trim()) {
      setFieldError("username is required");
      usernameRef.current?.focus();
      return;
    }
    if (!password.trim()) {
      setFieldError("Password is required");
      passwordRef.current?.focus();
      return;
    }

    // setLoading(true);

    try {
      await login(username,password);
      setSuccess(true);
      setUsername("");
      setPassword("");
      if(user) navigate('/dashboard');
    } catch (err) {
      // setError("Simulated login unsuccess");
    } finally {
      // setLoading(false);
    }
  };

  console.log("username: ", username, "Pass: ", password);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {fieldError || error && (
          <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 p-2 rounded">
            {fieldError || error}
          </p>
        )}
        

        {/* {user ? (
          <div className="text-center text-green-700">
            <h2 className="text-2xl font-bold mb-2">Welcome!</h2>
            <p>{user.username } you have Successfully logged in.</p>
          </div>
        ) : ( */}
          <>
            <Input
                ref={usernameRef}
                id="username"
                label="Username"
                type="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Enter your Username"
                autoComplete="username"
            />
            <Input
                ref={passwordRef}
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your Password"
                autoComplete="Current-Password"
            />
            {/* <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition 
          ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
            >
              {loading ? "Signing in...." : "Submit"}
            </button> */}
            <Button type="submit" loading={loading} variant="primary">Sign in</Button>
            <p className="text-center text-sm text-gray-600 mt-4"> Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline justify-center">Sign up</Link>
            </p>    
          </>
        {/* )} */}
      </form>
    </div>
  );
}

export default Login;
