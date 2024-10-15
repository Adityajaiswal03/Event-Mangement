import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios
            .post(
                "http://localhost:4000/api/v1/message/send",
                {
                    name,
                    email,
                    subject,
                    message,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
            })
            .catch((error) => {
              console.log(error.response);
                toast.error(error.response.data.message);
            });
    };

    return (
        <>
            <div className="contact container">
                <div className="banner">
                    <div className="item">
                        <h4>Address</h4>
                        <p>Electronic City,Bengaluru, 560100</p>
                    </div>
                    <div className="item">
                        <h4>Call Us</h4>
                        <p>Call Us: +91-9999999999</p>
                    </div>
                    <div className="item">
                        <h4>Mail Us</h4>
                        <p>luxemoments@gmail.com</p>
                    </div>
                </div>
                <div className="banner">
                    <div className="item">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62241.30634487472!2d77.63299792276327!3d12.838000428286376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8a7750e1c3%3A0x4a5cfc0fce5af71d!2sElectronic%20City%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1728807825879!5m2!1sen!2sin"
                            style={{
                                border: 0,
                                width: "100%",
                                height: "450px",
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="item">
                        <form onSubmit={handleSendMessage}>
                            <h2>CONTACT</h2>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                rows={10}
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
