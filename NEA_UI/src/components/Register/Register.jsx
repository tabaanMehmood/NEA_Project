import { useState } from "react";
import TabButton from "../../components/TabButton/TabButton.jsx";
import "./Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    console.log("Register component rendered");
    const [selectedTab, setSelectedTab] = useState(null);

    const navigate = useNavigate();

    return (
        <section id="register">
            <div className="register-container">
                <div className="tab-button-container">
                    <TabButton 
                        label="Sign In" 
                        isSelected={selectedTab === "signIn"}
                        onClick={() => {
                            setSelectedTab("signIn");
                        }}
                    />
                    <TabButton 
                        label="Sign Up" 
                        isSelected={selectedTab === "signUp"}
                        onClick={() => setSelectedTab("signUp")} 
                    />
                </div> 
                <div className="tab-content">
                    {selectedTab === "signIn" && (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h2>Sign In</h2>
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button 
                                type="submit" 
                                onClick={() => { navigate("/MainPage"); }} >
                                Sign In
                            </button>
                            <div className="teacherStudent-tab-button-container">
                                <TabButton label="Teacher" />
                                <TabButton label="Student" />
                            </div>

                        </form>
                    )}

                    {selectedTab === "signUp" && (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h2>Sign Up</h2>
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button 
                                type="submit" 
                                onClick={() => { navigate("/MainPage"); }} >
                                Sign Up
                            </button>
                            <div className="teacherStudent-tab-button-container">
                                <TabButton label="Teacher" />
                                <TabButton label="Student" />
                            </div>
                        </form>
                    )} 
                </div> 
            </div>
        </section>
    );
}
