import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

interface ReviewCardProps {
  image: string;
  name: string;
  rating: number;
  content: string;
  designation: string;
}

const StyledReviewContainer = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  padding: 30,
}));

const StyledReviewAvatarWrapper = styled(Box)(() => ({
  width: 70,
  height: 70,
  overflow: "hidden",
  position: "relative",
}));

const StyledReviewContent = styled(Typography)<{ component: any }>(
  ({ theme }) => ({
    lineHeight: "24px",
    fontWeight: 400,
    color: theme.palette.grey[700],
  })
);

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  name,
  rating,
  content,
  designation,
}) => {
  return (
    <StyledReviewContainer container>
      <Grid item xs={12} spacing={3} container alignItems="center">
        <Grid item>
          <StyledReviewAvatarWrapper>
            <Image
              objectFit="cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL={image}
              layout="fill"
              alt={`client=${name}`}
              src={image}
            />
          </StyledReviewAvatarWrapper>
        </Grid>
        <Grid item xs={9}>
          <Typography variant="subtitle2" component="h6">
            {name}
          </Typography>
          <Typography variant="caption" component="span">
            {designation}
          </Typography>
          <Box>
            <Rating
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
              size="small"
              name="read-only"
              value={rating}
              readOnly
            />
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box pt={2}>
          <StyledReviewContent variant="subtitle2" component="p">
            {content}
          </StyledReviewContent>
        </Box>
      </Grid>
    </StyledReviewContainer>
  );
};

export default ReviewCard;
