import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Calendar from "react-calendar";
import "../../style/Calender.css";

export const Calender = () => {
  const [value, setValue] = useState(new Date());
  const handleDateChange = (value: any) => {
    if (value) {
      setValue(value);
    }
  };
  return (
    <Box
      className="mainDashboard"
      w="100%"
      p="20px"
      bgColor="bg.primary"
      h={{ md: "500px", lg: "300px" }}
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 1" }}
      overflowY="auto"
      minWidth="0"
    >
      <Calendar onChange={handleDateChange} value={value} />
    </Box>
  );
};
