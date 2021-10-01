import axios from "axios";
import { atom, selector } from "recoil";

export const addToCartState = atom({
    key: 'addToCartState',
    default: null
});

export const cartState = selector({
    key: 'cartState',
    get: async ({ get }) => {
        const newCart = get(addToCartState);
        if (newCart) {
            try {
                const { data } = await axios.post(`/add-to-cart/${newCart.id}`);
                return data;
            } catch (e) {
                return {};
            }
        }
        try {
            const { data } = await axios.get('cart-list');
            return data;
        } catch (e) {
            return {};
        }
    }
});

export const favouriteState = atom({
    key: 'favouriteState',
    default: []
});
