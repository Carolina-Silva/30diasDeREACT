import "./DarkMode.css";
import { ChangeEventHandler } from "react";

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme" , "dark");
}

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme" , "light");
}

const storedTheme = localStorage.getItem("theme");

const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme == null && prefersDark);

if(defaultDark) {
    setDark();
}


const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked){
        setDark();
    }else{
        setLight();
    }
}

const DarkMode  = () => {
    return(
        <div className="toggle-theme-wrapper">
            <span>ON</span>
            <label 
                htmlFor="checkbox" 
                className="toggle-theme">
                <input 
                    type="checkbox" 
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark} 
                />
                <div className="slider round"></div>
            </label>
            <span>OFF</span>
        </div>
    )
}

export default DarkMode;