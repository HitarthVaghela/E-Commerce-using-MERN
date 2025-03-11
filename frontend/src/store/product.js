import {create} from "zustand"

export const useProductStore = create((set) => ({

    products: [],
    setProducts: (products) = set({ products }),
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, messgae: "Please fill in all fields"}
        }
    }
}))

// const [state, setState] = useState([])