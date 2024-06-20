import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./GameRegistration.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface User {
  firstName: string;
  lastName: string;
  email: string;
}

const GameRegistration: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);
  const [registrationComplete, setRegistrationComplete] =
    useState<boolean>(false);

  useEffect(() => {
    const storedRegisteredUsers = localStorage.getItem("registeredUsers");
    if (storedRegisteredUsers) {
      setRegisteredUsers(JSON.parse(storedRegisteredUsers));
    }
  }, []);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const isEmailRegistered = (email: string) => {
    return registeredUsers.some((user) => user.email === email);
  };

  const isNameValid = (name: string) => {
    return /^[A-Z][a-z]*$/.test(name);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const capitalizedValue =
      name === "firstName" || name === "lastName"
        ? capitalizeFirstLetter(value)
        : value;
    setFormData({
      ...formData,
      [name]: capitalizedValue,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmailRegistered(formData.email)) {
      alert("Email already registered!");
      return;
    }

    if (!isNameValid(formData.firstName) || !isNameValid(formData.lastName)) {
      alert("Name and surname must start with an uppercase letter!");
      return;
    }

    const newUser: User = {
      firstName: capitalizeFirstLetter(formData.firstName),
      lastName: capitalizeFirstLetter(formData.lastName),
      email: formData.email,
    };

    const updatedRegisteredUsers = [...registeredUsers, newUser];
    setRegisteredUsers(updatedRegisteredUsers);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(updatedRegisteredUsers)
    );

    setRegistrationComplete(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  const handleReturn = () => {
    setRegistrationComplete(false);
  };

  return (
    <div className="registration-container">
      <img
        src="https://wallpaperaccess.com/full/319163.jpg"
        alt="Mortal Kombat"
        className="registration-image"
      />
      {!registrationComplete ? (
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Game Registration</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btnRegisterr" type="submit">
            Register
          </button>
        </form>
      ) : (
        <div className="registration-success">
          <p className="registration-message">Thank you for registering!</p>
          <p className="registration-message">
            Our customer support team will provide more information via email
            soon.
          </p>
          <button className="btnRegisterr" onClick={handleReturn}>
            Return to Registration Form
          </button>
        </div>
      )}
    </div>
  );
};

export default GameRegistration;

