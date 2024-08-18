import { Product } from "./types";

export const handleInputChange = (e, CallbackToUpdateInput: CallableFunction, InputShownToUser: Partial<Product>) => {
    const { name, value } = e.target;
    CallbackToUpdateInput({ ...InputShownToUser, [name]: value });
  };