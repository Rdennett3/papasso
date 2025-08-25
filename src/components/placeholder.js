import { title } from "motion/react-client"
import React from "react"

const Placeholder = () => {
    const styles = {
        placeholder: {
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh"
        },
    }
    return (
        <section className="placeholder">
            <div className="placeholder-wrapper">

            </div>
        </section>
    )
}


export default Placeholder