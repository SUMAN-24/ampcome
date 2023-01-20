import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "../styles/Login.module.css";
import frame from "../media/Frame.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {useNavigate} from "react-router-dom";

const initialState={
    username:"",
    password:"",
    unit_name:"",
}

const Login = () => {
    const [loginData,setLoginData]=useState(initialState);
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setLoginData({
            ...loginData,
            [name]:value
        })
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("loginData",JSON.stringify(loginData))
        navigate("/doctor_dashboard")
    }

  return (
    <Stack className={styles.login_div}>
      {/* group1 */}
      <Box className={styles.group1}>
        <Box className={styles.rectangle}>
          <Heading className={styles.welcome_to_app}>
            Welcome to App Name
          </Heading>
          <Text className={styles.get_ahead_of_the_curve}>
            Get ahead of the curve. Join the next generation of health heroes.
          </Text>
          <Box className={styles.frame_1}>
            <Box className={styles.frame_2}>
              <Image src={frame} alt="frame" />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* group2 */}
      <Box className={styles.group2}>
        <Heading className={styles.form_heading}>
          Sign-in to your account
        </Heading>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="username" className={styles.inpt1} placeholder="Username" onChange={handleChange} />

          <input type="password" name="password" className={styles.inpt2} placeholder="Password" onChange={handleChange} />

          <select name="unit_name" className={styles.inpt3} onChange={handleChange}>
            <option value="select_unit_name">Select Unit Name</option>
            <option value="unit1">unit1</option>
            <option value="unit2">unit2</option>
            <option value="unit3">unit3</option>
            <option value="unit4">unit4</option>
            <option value="unit5">unit5</option>
          </select>
          <span>
            <ChevronDownIcon />
          </span>

          <Button className={styles.call_to_action} type="submit">Sign In</Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
