export const BASE_URL = 'http://localhost:8000/api';

// Define URLs for products and related endpoints
export const PRODUCTS_URL = `${BASE_URL}/products`;
export const PRODUCTS_TAGS_URL = `${PRODUCTS_URL}/tags`;
export const PRODUCTS_BY_SEARCH_URL = `${PRODUCTS_URL}/search`;
export const PRODUCTS_TAG_URL = `${PRODUCTS_URL}/tag`;
export const PRODUCTS_ID_URL = `${PRODUCTS_URL}/`; // Ensure to append the product ID when making requests.
