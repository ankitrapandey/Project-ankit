import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProductCardProps {
    name: string;
    price: number;
    weight: string;
    image: string;
}

interface ProductCardState {
    quantity: number;
}

class ProductCard extends Component<ProductCardProps, ProductCardState> {
    constructor(props: ProductCardProps) {
        super(props);
        this.state = { quantity: 0 };
    }

    handleIncrease = () => {
        this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
    };

    handleDecrease = () => {
        this.setState((prevState) => ({
            quantity: prevState.quantity > 0 ? prevState.quantity - 1 : 0,
        }));
    };

    render() {
        const { name, price, weight, image } = this.props;
        const { quantity } = this.state;

        return (
            <Card>
                <CardMedia component="img" height="260" image={image} alt={name} />
                <CardContent>
                    <Typography variant="h5">{name}</Typography>
                    <Typography variant="body2">Rs. {price}</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Typography variant="body2" sx={{ color: "black", fontWeight: "bold" }}>{weight}</Typography>
                        {quantity === 0 ? (
                            <Button variant="contained" color="primary" onClick={this.handleIncrease}>
                                Add
                            </Button>
                        ) : (
                            <Box display="flex" alignItems="center">
                                <IconButton onClick={this.handleDecrease} color="primary">
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="h6" mx={2}>
                                    {quantity}
                                </Typography>
                                <IconButton onClick={this.handleIncrease} color="primary">
                                    <AddIcon />
                                </IconButton>
                            </Box>
                        )}
                    </Box>
                </CardContent>
            </Card>
        );
    }
}

export default ProductCard;