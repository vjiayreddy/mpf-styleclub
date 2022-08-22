import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIconComponent from "./ImageIcon";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  width: "100%",
  margin: "0 auto",
  paddingTop: 20,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.MuiTab-textColorPrimary": {
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
}));

interface ImageIconTabsProps {
  data: any[];
  tabIndex: number | boolean;
  onTabChange: (e: React.SyntheticEvent, value: number) => void;
}

const ImageIconTabs: React.FC<ImageIconTabsProps> = ({
  data,
  tabIndex,
  onTabChange,
}) => {
  const theme = useTheme();
  return (
    <StyledTabs
      scrollButtons="auto"
      centered
      variant="scrollable"
      onChange={onTabChange}
      value={tabIndex}
    >
      {data.map((item, index) => (
        <StyledTab
          key={index}
          icon={
            <ImageIconComponent
              sx={{
                border:
                  tabIndex === index
                    ? `3px solid ${theme.palette.primary.main}`
                    : "none",
              }}
              alt={item.name}
              iconHeight={60}
              iconWidth={60}
              image={item.image}
            />
          }
          label={item.label}
        />
      ))}
    </StyledTabs>
  );
};

export default ImageIconTabs;
