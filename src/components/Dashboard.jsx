import { Image, Select, Text } from "@chakra-ui/react";
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
import img9 from "../media/Component.png";

const Dashboard = () => {
  const { username, unit_name } = JSON.parse(localStorage.getItem("loginData"));
  return (
    <div className={styles.dashboard_main}>
      {/* sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.imgs}>
          <div className={styles.img1}>
            <Image src={img1} alt="sidebar_icon" />
            <div className={styles.img2}>
              <Image src={img2} alt="sidebar_line" />
            </div>
          </div>

          <div className={styles.img3}>
            <Image src={img3} alt="sidebar_icon" />
          </div>

          <div className={styles.img4}>
            <Image src={img4} alt="sidebar_icon" />
          </div>

          <div className={styles.img5}>
            <Image src={img5} alt="sidebar_icon" />
          </div>

          <div className={styles.img6}>
            <Image src={img6} alt="sidebar_icon" />
          </div>

          <div className={styles.img7}>
            <Image src={img7} alt="sidebar_icon" />
          </div>

          <div className={styles.img8}>
            <Image src={img8} alt="sidebar_icon" />
          </div>
        </div>
      </div>

      {/* top_part */}
      <div className={styles.top_section}>
        <div className={styles.name_part}>
          <div>
            <Text>Welcome</Text>
          </div>
          <div className={styles.name_part1}>
            <Text>{username}</Text>
          </div>
        </div>
        <div className={styles.unit_name}>
            <Text>{unit_name}</Text>
        </div>
      </div>

      <div className={styles.earnings}>
        <div className={styles.icon}>
            <img src={img9} alt="earning_icon"/>
            <div className={styles.text_earning}>
                <Text>Total Earnings</Text>
            </div>

            <div className={styles.text_amount}>
                <Text>₹4000</Text>
            </div>

            <div className={styles.select_unit}>
                <Text>Unit</Text>
                <Select >
                    <option>PRK Hospital</option>
                    <option>SRK Hospital</option>
                    <option>KK Hospital</option>
                </Select>
            </div>

            <div className={styles.select_time}>
                <Text>Time Duration</Text>
                <Select >
                    <option>Last 7 days</option>
                    <option>Last 2 week</option>
                    <option>Last month</option>
                </Select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
