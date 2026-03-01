import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!username.trim()) return setError("Name is required");
    if (!email.trim()) return setError("Email is required");
    if (!password.trim()) return setError("Password is required");
    if (password.length < 6)
      return setError("Password Length should be minimum 6 characters");
    if (password !== confirmPassword) return setError("Passwords do not match");

    console.log("signup success!");
    setSuccess(true);
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Signup</h2>
        {error && (
        <p className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 p-2 rounded">
            {error}
        </p>
        )}

        {success && (
          <p className="mb-4 text-sm text-green-500 bg-red-50 border-green-100 p-2 rounded">
            Login Successful!
          </p>
        )}
        <Input
            label="Username"
            type="text"
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="Give a unique username"
            value={username}
        />
        <Input
            type="email"
            label="Email"
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter you emailId"
            value={email}
        />
        <Input
            type="password"
            label="Password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your Password"
            value={password}
        />
        <Input
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            placeholder="Repeat your Password"
        />
        {/* <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button> */}
        <Button type="submit" variant="primary">sign up</Button>

        <p className="text-center text-sm text-gray-600 mt-4">
          {" "}
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:underline justify-center"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
