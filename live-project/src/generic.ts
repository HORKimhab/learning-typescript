function getSearchProduct<T>(products: T[]): T {
    const index = 3; 
    return products[index];
}

// Arrow function with generic 
const getMoreSearchProducts = <T>(products: T[]): T => {
    const index = 75;
    return products[index];   
}