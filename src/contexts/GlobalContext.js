import { createContext } from "react";

const GlobalContext =  createContext();//creo contesto accessibile da altri componenti-valore tra parentesi e quello fornito da provider

export default GlobalContext

//per essere utilizzata fare dove ti serve:
//const {posts} = useContext(GlobalContext)