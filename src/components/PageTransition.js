import React from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PageTransition({ location, children }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}   // hidden from right
                animate={{ opacity: 1 }}    // reveal fully
                exit={{ opacity: 0 }}    // hide to left
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute w-full h-full top-0 left-0 bg-white z-40"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
