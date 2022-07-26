//import { GetStaticProps } from "next";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ContainerComponent from "../../src/components/uiElements/Container/Container";
import apolloClient from "../../src/apollo/config";
import { gql } from "@apollo/client";
import SliderProductCard from "../../src/components/UiLibrary/Cards/SliderProductCard";
import { GetStaticPaths, GetStaticProps } from "next";
import router, { useRouter } from 'next/router';
import { useQuery } from "@apollo/client";


const GET_PRODUCTS = gql`
query productFilter($params: ProductFilter!, $page: Int, $limit: Int) {
    productsFilter(params: $params, page: $page, limit: $limit) {
      products {
        _id
        name
        price
        title
        images
        altText
        pImgIndx
        description
        discPrice
        warranty
      }
      totalItemCount
    }
  }
`;





const ProductsPage = (props) => {
    const router = useRouter();
    if (router.isFallback) {
        return <ContainerComponent>
            <div>Loading....</div>
        </ContainerComponent>;
    }
    return <ContainerComponent>
        <Button onClick={() => {
            router.push(`/looks/${Number(router.query.page) + 1}`, undefined, { shallow: true })
        }}>Load Data</Button>
        <Grid container>
            {props.looks?.map((product) => <Grid key={product._id} item md={4}>
                <SliderProductCard title={product.title} imgUrl={product.images[0] ? product.images[0] : '/assets/images/girl.jpg'} price={product.price} />
            </Grid>)}
        </Grid>
    </ContainerComponent>;
};



// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [{
//             params: { page: "1" }
//         }],
//         fallback: true
//     }
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {

    try {
        const { data } = await apolloClient.query({
            query: GET_PRODUCTS,
            variables: {
                limit: 10,
                page: 1,
                params: {
                    occasionId: "5fc1b4515d81df3fcc445dff"
                }
            }
        })
        return {
            revalidate: 60,
            props: {
                looks: data.productsFilter.products,
            }
        }
    }
    catch (error) {
        console.log("error", error);
        return {
            notFound: true
        }
    }

}

export default ProductsPage;
