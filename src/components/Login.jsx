import React, { useState } from "react";
import { Image, Select } from "@chakra-ui/react";
import styles from "../styles/Login.module.css";
import frame from "../media/Frame.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  unit_name: "",
};

const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(loginData));
    navigate("/doctor_dashboard");
  };

  return (
    <div className={styles.login_div}>
      {/* group1 */}
      <div className={styles.group1}>
        <div className={styles.rectangle}>
          <h2 className={styles.welcome_to_app}>Welcome to App Name</h2>
          <text className={styles.get_ahead_of_the_curve}>
            Get ahead of the curve. Join the next generation of health heroes.
          </text>
          <div className={styles.frame_1}>
            <div className={styles.frame_2}>
              <Image src={frame} alt="frame" />
            </div>
          </div>
        </div>
      </div>
      {/* group2 */}
      <div className={styles.group2}>
        <h2 className={styles.form_heading}>Sign-in to your account</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="username"
            className={styles.inpt1}
            placeholder="Username"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            className={styles.inpt2}
            placeholder="Password"
            onChange={handleChange}
          />

          <Select
            name="unit_name"
            style={{
              width: "294px",
              height: "44px",
              marginTop: "15px",
              background: " #ffffff",
              border: "1px solid rgba(192, 206, 255, 0.7)",
              borderRadius: "6px",

              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              paddingLeft: "10%",
              lineHeight: "17px",
              color: "#29375f",
            //   border: "1px solid #bfd2f3",
              appearance: "none",
            }}
            onChange={handleChange}
          >
            <option value="select_unit_name">Select Unit Name</option>
            <option value="cardiology">cardiology</option>
            <option value="neurology">neurology</option>
            <option value="osteology">osteology</option>
            <option value="unit4">unit4</option>
            <option value="unit5">unit5</option>
          </Select>
          <span>
            <ChevronDownIcon />
          </span>

          <button className={styles.call_to_action} type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
