import { useState } from "react";
import TabButton from "./components/TabButton/TabButton.jsx";
import "./Register.css";

export default function Register() {
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <section id="register">
            <div className="register-container">
                <div className="tab-button-container">
                    <TabButton 
                        label="Sign In" 
                        isSelected={selectedTab === "signIn"}
                        onClick={() => setSelectedTab("signIn")} 
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
                            <button type="submit">Sign In</button>
                        </form>
                    )}

                    {selectedTab === "signUp" && (
                        <form onSubmit={(e) => e.preventDefault()}>
                            <h2>Sign Up</h2>
                            <input type="text" placeholder="Username" required />
                            <input type="email" placeholder="Email" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Sign Up</button>
                        </form>
                    )}
                </div> 
            </div>
        </section>
    );
}