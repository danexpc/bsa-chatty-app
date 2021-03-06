import React from "react";
import "./Preloader.css"

interface PreloaderProps {
}

export const Preloader: React.FC<PreloaderProps> = () => {
    return (
        <div className="preloader d-flex justify-content-center align-items-center">
            <div className="loadingio-spinner-ripple-k9s0u2ujati">
                <div className="ldio-hbdm1jns1kt">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
