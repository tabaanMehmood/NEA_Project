import { useState } from "react";
import TabButton from "../../components/TabButton/TabButton.jsx";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5001/api";

export default function Register() {
    console.log("Register component rendered");
    const [selectedTab, setSelectedTab] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Sign Up form state
    const [signUpData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        user_type: null
    });

    // Sign In form state
    const [signInData, setSignInData] = useState({
        email: "",
        password: "",
        user_type: null
    });

    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        
        // Validate user type is selected
        if (!signUpData.user_type) {
            setError("Please select Teacher or Student");
            return;
        }

        // Validate all fields are filled
        if (!signUpData.username || !signUpData.email || !signUpData.password) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: signUpData.username,
                    email: signUpData.email,
                    password: signUpData.password,
                    user_type: signUpData.user_type
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Registration successful! Redirecting...");
                // Store user data in localStorage if needed
                localStorage.setItem("user", JSON.stringify(data));
                setTimeout(() => {
                    navigate("/MainPage");
                }, 1000);
            } else {
                setError(data.error || "Registration failed. Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to server. Make sure the backend is running.");
            console.error("Registration error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Validate user type is selected
        if (!signInData.user_type) {
            setError("Please select Teacher or Student");
            return;
        }

        // Validate all fields are filled
        if (!signInData.email || !signInData.password) {
            setError("Please fill in all fields");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: signInData.email,
                    password: signInData.password
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess("Login successful! Redirecting...");
                // Store user data in localStorage
                localStorage.setItem("user", JSON.stringify(data));
                setTimeout(() => {
                    navigate("/MainPage");
                }, 1000);
            } else {
                setError(data.error || "Invalid email or password");
            }
        } catch (err) {
            setError("Failed to connect to server. Make sure the backend is running.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleUserTypeSelect = (type, formType) => {
        if (formType === "signUp") {
            setSignUpData({ ...signUpData, user_type: type });
        } else {
            setSignInData({ ...signInData, user_type: type });
        }
        // Clear error when user selects type
        setError("");
    };

    return (
        <section id="register">
            <div className="register-container">
                <div className="tab-button-container">
                    <TabButton 
                        label="Sign In" 
                        isSelected={selectedTab === "signIn"}
                        onClick={() => {
                            setSelectedTab("signIn");
                            setError("");
                            setSuccess("");
                        }}
                    />
                    <TabButton 
                        label="Sign Up" 
                        isSelected={selectedTab === "signUp"}
                        onClick={() => {
                            setSelectedTab("signUp");
                            setError("");
                            setSuccess("");
                        }} 
                    />
                </div> 
                <div className="tab-content">
                    {/* Error and Success Messages */}
                    {error && (
                        <div style={{ 
                            color: "red", 
                            padding: "10px", 
                            margin: "10px 0",
                            backgroundColor: "#ffe6e6",
                            borderRadius: "4px"
                        }}>
                            {error}
                        </div>
                    )}
                    {success && (
                        <div style={{ 
                            color: "green", 
                            padding: "10px", 
                            margin: "10px 0",
                            backgroundColor: "#e6ffe6",
                            borderRadius: "4px"
                        }}>
                            {success}
                        </div>
                    )}

                    {selectedTab === "signIn" && (
                        <form onSubmit={handleSignIn}>
                            <h2>Sign In</h2>
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                                value={signInData.email}
                                onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                                value={signInData.password}
                                onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                            />
                            <div className="teacherStudent-tab-button-container">
                                <TabButton 
                                    label="Teacher" 
                                    isSelected={signInData.user_type === "Teacher"}
                                    onClick={() => handleUserTypeSelect("Teacher", "signIn")}
                                />
                                <TabButton 
                                    label="Student" 
                                    isSelected={signInData.user_type === "Student"}
                                    onClick={() => handleUserTypeSelect("Student", "signIn")}
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={loading}
                            >
                                {loading ? "Signing In..." : "Sign In"}
                            </button>
                        </form>
                    )}

                    {selectedTab === "signUp" && (
                        <form onSubmit={handleSignUp}>
                            <h2>Sign Up</h2>
                            <input 
                                type="text" 
                                placeholder="Username" 
                                required 
                                value={signUpData.username}
                                onChange={(e) => setSignUpData({ ...signUpData, username: e.target.value })}
                            />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                required 
                                value={signUpData.email}
                                onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                            />
                            <input 
                                type="password" 
                                placeholder="Password" 
                                required 
                                value={signUpData.password}
                                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                            />
                            <div className="teacherStudent-tab-button-container">
                                <TabButton 
                                    label="Teacher" 
                                    isSelected={signUpData.user_type === "Teacher"}
                                    onClick={() => handleUserTypeSelect("Teacher", "signUp")}
                                />
                                <TabButton 
                                    label="Student" 
                                    isSelected={signUpData.user_type === "Student"}
                                    onClick={() => handleUserTypeSelect("Student", "signUp")}
                                />
                            </div>
                            <button 
                                type="submit" 
                                disabled={loading}
                            >
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </form>
                    )} 
                </div> 
            </div>
        </section>
    );
}
