import {create} from "zustand"

export const useProductStore = create((set) => ({

    products: [],
    setProducts: (products) = set({ products }),
    createProducts: async (newProduct) => {
        if (!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, messgae: "Please fill in all fields"}
        }
        const res = await fetch("/api/products", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newProduct)
        })
        const data = await  res.json();
        set({state} => ({products:[...state.products, data]}))
    }
}))

// const [state, setState] = useState([])