import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";
import React from "react";

interface ChipData {
  key: number;
  label: string;
}

const ChipsList = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsComponent = () => {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
    { key: 5, label: "Angular" },
    { key: 6, label: "jQuery" },
    { key: 7, label: "Polymer" },
    { key: 8, label: "React" },
    { key: 9, label: "Vue.js" },
    { key: 10, label: "Angular" },
    { key: 11, label: "jQuery" },
    { key: 12, label: "Polymer" },
    { key: 13, label: "React" },
    { key: 14, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const StyledChipBoxWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: `10px 0px`,
    margin: "0px",
    borderBottom:`1px solid ${theme.palette.grey[200]}`
  }));

  return (
    <>
      {setChipData.length > 0 && (
        <StyledChipBoxWrapper component="ul">
          {chipData.map((data) => {
            return (
              <ChipsList key={data.key}>
                <Chip
                  variant="outlined"
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
              </ChipsList>
            );
          })}
        </StyledChipBoxWrapper>
      )}
    </>
  );
};
export default ChipsComponent;
