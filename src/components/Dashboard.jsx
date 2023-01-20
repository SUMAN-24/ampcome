import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Dashboard.module.css";
import img1 from "../media/img1.png";
import img2 from "../media/Line.png";
import img3 from "../media/noun_queue.png";
import img4 from "../media/noun_appointment.png";
import img5 from "../media/noun_Rupee.png";
import img6 from "../media/noun_bill.png";
import img7 from "../media/Vector.png";
import img8 from "../media/Rectangle.png";

const Dashboard = () => {
  return (
    <Stack className={styles.dashboard_main}>
      {/* sidebar */}
      <Box className={styles.sidebar}>
        <Box className={styles.imgs}>
          <Box className={styles.img1}>
            <Image src={img1} alt="sidebar_icon" />
            <Box className={styles.img2}>
              <Image src={img2} alt="sidebar_line" />
            </Box>
          </Box>

          <Box className={styles.img3}>
            <Image src={img3} alt="sidebar_icon" />
          </Box>

          <Box className={styles.img4}>
            <Image src={img4} alt="sidebar_icon" />
          </Box>

          <Box className={styles.img5}>
            <Image src={img5} alt="sidebar_icon" />
          </Box>

          <Box className={styles.img6}>
            <Image src={img6} alt="sidebar_icon" />
          </Box>

          <Box className={styles.img7}>
            <Image src={img7} alt="sidebar_icon" />
          </Box>

          <Box className={styles.img8}>
            <Image src={img8} alt="sidebar_icon" />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Dashboard;
