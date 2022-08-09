import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  image?: string;
  content: string;
  btnName: string;
  onClickBtn: () => void;
}

const StyledInfoCardBox = styled(Box)(() => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));

const StyledInfoCardMessage = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    flexGrow: 1,
    width: "80%",
    margin: "0 auto",
    fontSize: 14,
    color: theme.palette.grey[500],
  })
);

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  image,
  content,
  btnName,
  onClickBtn,
}) => {
  return (
    <StyledInfoCardBox>
      <Box>
        {image && (
          <Image
            alt="serer-down"
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
            width={350}
            height={250}
            src={image}
          />
        )}
      </Box>
      <Box>
        <Typography align="center" variant="h6" component="h6">
          {title}
        </Typography>
        <StyledInfoCardMessage variant="body1" component="p" align="center">
          {content}
        </StyledInfoCardMessage>
      </Box>
      <Box mt={3}>
        <Button onClick={onClickBtn} variant="contained" color="secondary">
          {btnName}
        </Button>
      </Box>
    </StyledInfoCardBox>
  );
};

export default InfoCard;
