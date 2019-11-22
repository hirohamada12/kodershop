import ProductService from "../services/ProductService";

// let MyProducts = data.data.products;
export const fetchProducts = (product, times) => (
    setTimeout(() => {
        const service = new ProductService();
        service.getAll({}, async result => product(result.data))
    }, times || 150)
);

export const ProductsData = () => dispatch => {
    dispatch({
        type: "GET_PRODUCTS_VALUE"
    });
    fetchProducts(products => {
        dispatch({
            type: "ACTUAL_PRODUCTS",
            products
        });
        return products;
    })
};
