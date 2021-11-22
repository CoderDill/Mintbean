import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { CirclePicker } from "react-color";
import "../styles/ColoringPage.css";
import DemoBook from "./DemoBook";
import PictureSelect from "./PictureSelect";
export default function ColoringPage() {
  const [currentColor, setCurrentColor] = useState("white");
  const [book, setBook] = useState("Random");
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#735548",
    "#607db8",
    "#222222",
    "#FFFFFF",
  ];
  const availableBooks = ["Random", "Peppa"];
  const handleBookChange = (e) => {
    setBook(e.target.value);
  };
  const handleChangeColor = (color) => {
    setCurrentColor(color.hex);
  };


  return (
    <Box sx={{ paddingTop: "1rem", height: "100vh" }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ margin: "auto" }}>
          <PictureSelect
            setBook={setBook}
            book={book}
            handlePictureChange={handleBookChange}
            availableBooks={availableBooks}
          />
        </Box>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Box

            sx={{
              margin: "auto",
              width: "75%",
              padding: "1rem",
              backgroundColor: "rgba(190, 164, 164, 0.8)",
              borderRadius: "5px",
            }}
          >
            <CirclePicker
              width="100%"
              className="ColoringPage-sketch"
              direction={"horizontal"}
              circleSize={50}
              colors={colors}
              color={currentColor}
              onChangeComplete={handleChangeColor}
            />
          </Box>

        </Box>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
        }}
      >
        <DemoBook bookName={book} currentColor={currentColor} />
      </Box>
    </Box>
  );
}

