import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import api from "../api/axiosInstance";

//define user type
type User = {
    id:string,
    email:string,
    username:string,
    password:string
}

//define the shape of our context
type AuthContextType = {
    user : User | null;
    loading : boolean;
    error : string | null;
    login: (username:string,password:string)=>void;
    logout:()=>void;
};

//Create the Context --- will create the global store for auth data
const AuthContext = createContext<AuthContextType | undefined>(undefined);


//Create a provider component
export function AuthProvider({children}:{children: ReactNode}){
    const [user,setUser] =useState<User|null>(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState<string|null>(null);

    useEffect(()=>{
        const storedUser = localStorage.getItem("user")
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    },[]);

    useEffect(()=>{
        if(user){
            localStorage.setItem("user",JSON.stringify(user));
        }else{
            localStorage.removeItem("user")
        }
    },[user]);

    const login = async(username:string,password:string)=>{
        setLoading(true);
        setError(null);
        try{
            const response = await api.post('/login',{username,password});
            setUser(response.data);
            setError(response.data)
            console.log(response.data);
        }catch(error){
            setError("Internal server error");
        }finally{
            setLoading(false);
        }
        
    }

    const logout = () =>{
        setUser(null);
        console.log("user logged out");
    }

    return(
        <AuthContext.Provider value={{user,loading,error,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
}

//custom hook so we can access user,login(),logout() anywhere
export function useAuth(){
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used with in AuthProvider");
    return context;
}

