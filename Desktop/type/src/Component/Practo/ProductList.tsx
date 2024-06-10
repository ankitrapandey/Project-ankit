
import React, { Component } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';


class ProductList extends Component {
    render() {
        const products = [
            { name: 'PainAway', price: 299, weight: '50 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'RelaxoLife', price: 499, weight: '100 ML', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
            { name: 'GlowMagic', price: 349, weight: '10 PACKETS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU' },
            { name: 'SilkStrand', price: 389, weight: '75 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'PainAway', price: 299, weight: '50 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'RelaxoLife', price: 499, weight: '100 ML', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
            { name: 'GlowMagic', price: 349, weight: '10 PACKETS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU' },
            { name: 'SilkStrand', price: 389, weight: '75 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'PainAway', price: 299, weight: '50 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'RelaxoLife', price: 499, weight: '100 ML', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
            { name: 'GlowMagic', price: 349, weight: '10 PACKETS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU' },
            { name: 'SilkStrand', price: 389, weight: '75 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'PainAway', price: 299, weight: '50 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
            { name: 'RelaxoLife', price: 499, weight: '100 ML', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU' },
            { name: 'GlowMagic', price: 349, weight: '10 PACKETS', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU' },
            { name: 'SilkStrand', price: 389, weight: '75 GM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU' },
        ];

        return (
            <Grid container spacing={12}>
                {products.map((product, index) => (
                    <Grid
                        sx={{
                            height: '100%',
                            '&:hover': {
                                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'
                            }
                        }}
                        item xs={12} sm={6} md={4} lg={3} key={index}>
                        <ProductCard {...product} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default ProductList;