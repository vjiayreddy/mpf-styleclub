import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import ArticleIcon from '@mui/icons-material/Article';
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import LinkIconButton from "../LinkIconButton";

const StyledCardBox = styled(Box)(({ theme }) => ({
    ...theme.globalCardStyle,

}));

const StyledCardContent = styled(CardContent)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: 300,
    height: 'auto'
}));

const StyledTitle = styled(Typography)<{ component: React.ReactNode }>(() => ({
    fontWeight: 600,
    lineHeight: '20px'
}));

const StyledContent = styled(Typography)<{ component: React.ReactNode }>(() => ({
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '25.6px'
}));


interface CollaborateCardProps {
    title: string;
    content: string;
}

const CollaborateCard: React.FC<CollaborateCardProps> = ({
    title,
    content
}) => {
    return (
        <StyledCardBox>
            <Card>
                <StyledCardContent>
                    <Box mb={2}>
                        <ArticleIcon color="info" sx={{ width: 40, height: 40 }} />
                    </Box>
                    <StyledTitle gutterBottom align="center" variant="body1" component="h6">
                        {title}
                    </StyledTitle>
                    <StyledContent align="center" variant="body2" component="h6">
                        {content}
                    </StyledContent>
                    <Box>
                        <LinkIconButton btnId="btn-learn-more" onClick={() => { return; }} btnColor="info" label="Learn More" />
                    </Box>
                </StyledCardContent>
            </Card>
        </StyledCardBox>
    );
};

export default CollaborateCard;
