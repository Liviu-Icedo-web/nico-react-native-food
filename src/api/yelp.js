import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer akZU3acyas2i8ZhAc-DOe47cbeE236B5Y16pSNUcroFeXy_KyzSqcqdlrEUOoIB2NnbZsWVZi6KPyuQffrTdZ80u7ZzGqHXNGukv1LJvtKI1EygK0HZyICaFAX6TXXYx'
    }
});