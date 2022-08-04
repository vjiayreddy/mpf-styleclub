import React from "react";
import Image from "next/image";

const StyleRecommendationCard = () => {
    return (
        <div>
            <Image
                placeholder="blur"
                loading="lazy"
                blurDataURL="/assets/clients/2.jpg"
                src="/assets/clients/2.jpg"
                alt="style-rec-card"
                height={250}
                width={200}
            />
        </div>
    );
};

export default StyleRecommendationCard;
