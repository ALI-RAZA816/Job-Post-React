import { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextProvider({children}){
    const [show, setHide] = useState(false);
    const showSidebar = () => {
        setHide(true);
        document.querySelector('body').style.overflow = 'hidden';
    };
    const hideSidebar = () => {
        setHide(false)
        document.querySelector('body').style.overflowX = 'hidden';
        document.querySelector('body').style.overflowY = 'auto';
    };
    
    return (
        <AppContext.Provider value={{
            show,
            showSidebar,
            hideSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}