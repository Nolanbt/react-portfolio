import React from "react";

const styles = {
    LinkedIn: {
        width: "250px",
        height: "250px",
    },
    GitHub: {
        width: "170px",
        height: "170px",
        
    },
    email: {
        width: "220px",
        height: "220px",
        // "&:hover" {
        //     transform: "rotateY(130deg)"
        // }
    }
}

function Contact() {
    return (
        <div class="container vh-100">
            <div class="row">
                <div class="col-sm my-auto">
                    <a href="https://www.linkedin.com/in/nolanterpstra/" target="_blank">
                        <img style={styles.LinkedIn} src="https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" alt="LinkedIn Icon">
                        </img>
                    </a>
                </div>
                <div class="col-sm my-auto">
                    <a href="https://github.com/Nolanbt" target="_blank">
                        <img style={styles.GitHub} src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" alt="GitHub Icon">
                        </img>
                    </a>
                </div>
                <div class="col-sm my-auto">
                    <a href="mailto:nbakert@gmail.com" target="_blank">
                        <img style={styles.email} src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"  alt="Email Icon"></img>
                    </a>
                </div>
            </div>
            <div className="text-center" style={{color: "white"}}>
                <h1>Contact Info:</h1>
                <p>E-mail: nbakert@gmail.com</p>
                <p>Phone: (832) 406-9419</p>
            </div>
        </div>
    );
}

export default Contact;