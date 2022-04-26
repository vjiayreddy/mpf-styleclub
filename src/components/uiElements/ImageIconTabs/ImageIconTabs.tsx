import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageIconComponent from "./ImageIcon";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";

const StyledTabs = styled(Tabs)(({ theme }) => ({
  width: "100%",
  paddingTop: 20,
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  "& .MuiTabs-indicator": {
    display: "none",
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  "&.MuiTab-textColorPrimary": {
    fontSize: 12,
    fontWeight: 600,
  },
}));

interface ImageIconTabsProps {
  data: any[];
}

const ImageIconTabs: React.FC<ImageIconTabsProps> = ({ data }) => {
  const [tabIndex, setTabIndex] = React.useState<boolean | number>(0);
  const theme = useTheme();
  return (
    <StyledTabs
      onChange={(e: React.SyntheticEvent, value: number) => setTabIndex(value)}
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
              alt={item.alt}
              iconHeight={70}
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
