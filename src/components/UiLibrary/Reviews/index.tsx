import React from "react";
import ContainerComponent from "../../uiElements/Container/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import ReviewCard from "../Cards/ReviewCard";
import SlickSlider from "react-slick";

const StyledReviewsBox = styled(Box)(() => ({
  paddingLeft: 20,
  paddingRight: 20,
  paddingBottom: 50,
}));

const settings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const Reviews = () => {
  return (
    <ContainerComponent>
      <StyledReviewsBox className="review-slider">
        <SlickSlider {...settings}>
          <Box p={1}>
            <ReviewCard
              rating={4}
              content={`Had a Great experience with My Perfect Fit. I was looking for a Suit and Blazer for My Pre-wedding shoot. The designer made it very easy and  did a great job for me   with,perfect suit with right guidance for selection of  material, colour  and style . They are very  Polite and  supportive  ,  I would definitely recommend My Perfect.`}
              name="Rakesh Kumar"
              designation="Marketing Execute"
              image="/assets/clients/1.jpg"
            />
          </Box>
          <Box p={1}>
            <ReviewCard
              rating={4}
              content={`Had a Great experience with My Perfect Fit. I was looking for a Suit and Blazer for My Pre-wedding shoot. The designer made it very easy and  did a great job for me   with,perfect suit with right guidance for selection of  material, colour  and style . They are very  Polite and  supportive  ,  I would definitely recommend My Perfect.`}
              name="Rakesh Kumar"
              designation="Marketing Execute"
              image="/assets/clients/1.jpg"
            />
          </Box>
          <Box p={1}>
            <ReviewCard
              rating={4}
              content={`Had a Great experience with My Perfect Fit. I was looking for a Suit and Blazer for My Pre-wedding shoot. The designer made it very easy and  did a great job for me   with,perfect suit with right guidance for selection of  material, colour  and style . They are very  Polite and  supportive  ,  I would definitely recommend My Perfect.`}
              name="Rakesh Kumar"
              designation="Marketing Execute"
              image="/assets/clients/1.jpg"
            />
          </Box>
          <Box p={1}>
            <ReviewCard
              rating={4}
              content={`Had a Great experience with My Perfect Fit. I was looking for a Suit and Blazer for My Pre-wedding shoot. The designer made it very easy and  did a great job for me   with,perfect suit with right guidance for selection of  material, colour  and style . They are very  Polite and  supportive  ,  I would definitely recommend My Perfect.`}
              name="Rakesh Kumar"
              designation="Marketing Execute"
              image="/assets/clients/1.jpg"
            />
          </Box>
        </SlickSlider>
      </StyledReviewsBox>
    </ContainerComponent>
  );
};

export default Reviews;
