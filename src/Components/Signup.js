import "./Signup.css";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    mobilenumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      console.log(`Form submission failed
         due to validation errors.`);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 8) {
      errors.password = `Password must be at 
        least 8 characters long`;
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };
  return (
    <div>
      <div className="container">
        <h1 style={{ fontFamily: "Pristina", fontSize: "70px" }}>Instagram</h1>
        <p>Sign up to see photos and videos from your friends.</p>
        <div className="face">
          <a href="#" className="fb btn">
            <p style={{ textAlign: "center" }}>Login with Facebook</p>
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label"></label>
            <input
              className="form-input"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>
          <div>
            <label className="form-label"></label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div>
            <label className="form-label"></label>
            <input
              className="form-input"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <div>
            <label className="form-label"></label>
            <input
              className="form-input"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <p>
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <a
              href="https://www.facebook.com/help/instagram/261704639352628"
              style={{ textDecoration: "none" }}
            >
              Learn More
            </a>
          </p>
          <br></br>
          <p>
            By signing up, you agree to our
            <a
              href="https://help.instagram.com/581066165581870/?locale=en_US"
              style={{ textDecoration: "none" }}
            >
              Terms
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/privacy/policy"
              style={{ textDecoration: "none" }}
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://privacycenter.instagram.com/policies/cookies/"
              style={{ textDecoration: "none" }}
            >
              Cookies Policy
            </a>
            .
          </p>

          <button className="submit-button" type="submit">
            Signup
          </button>
        </form>

        <div>
          <p>
            Have an account?{" "}
            <a href="/" style={{ textDecoration: "none", color: "#3572EF" }}>
              Log in
            </a>
          </p>
        </div>
      </div>
      <div className="foot">
        <footer>
          <a href="" className="foot1">
            Meta
          </a>
          <a href="" className="foot1">
            About
          </a>
          <a href="" className="foot1">
            Blog
          </a>
          <a href="" className="foot1">
            Jobs
          </a>
          <a href="" className="foot1">
            Help
          </a>
          <a href="" className="foot1">
            Help
          </a>
          <a href="" className="foot1">
            API
          </a>
          <a href="" className="foot1">
            Privacy
          </a>
          <a href="" className="foot1">
            Terms
          </a>
          <a href="" className="foot1">
            Locations
          </a>
          <a href="" className="foot1">
            Contact Uploading & Non-Users
          </a>
        </footer>
      </div>
    </div>
  );
}
export default Signup;
