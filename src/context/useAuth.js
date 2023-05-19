import { useContext } from "react";
import AuthContext from "../hooks/userAuth";

const useAuth =()=>useContext(AuthContext);

export default useAuth;