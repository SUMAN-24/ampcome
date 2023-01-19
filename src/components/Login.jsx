import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import styles from "../styles/Login.module.css";

const Login = () => {
  return (
    <Stack className={styles.login_div}>
      <Box className={styles.group}>
        {/* group1 */}
        <Box className={styles.rectangle}>
          <Box className={styles.welcome_to_app}>Welcome to App Name</Box>
          <Box className={styles.get_ahead_of_the_curve}>
            Get ahead of the curve. Join the next generation of health heroes.
          </Box>
          <Box className={styles.frame}>

          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Login;
