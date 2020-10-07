/* eslint-disable react/jsx-no-target-blank */
import React from "react";

const styles = {
    text: {
        color: "white"
    }
}

function Footer() {
    return (
        <div className="card bg-transparent fixed-bottom">
            <div className="card-body">
                <a style={styles.text} className="mx-5 badge" href="https://www.linkedin.com/in/nolanterpstra/" target="_blank">LinkedIn</a>
                <a style={styles.text} className="mx-5 badge" href="https://github.com/Nolanbt" target="_blank">GitHub</a>
            </div>
        </div>
    );
}

export default Footer; 