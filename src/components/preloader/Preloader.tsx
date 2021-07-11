import React from "react";
import "../../preloader.css"

interface PreloaderProps {
}

export const Preloader: React.FC<PreloaderProps> = () => {
    return (
        <div className="preloader-wrapper">
            <div className="loadingio-spinner-ripple-k9s0u2ujati">
                <div className="ldio-hbdm1jns1kt">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
