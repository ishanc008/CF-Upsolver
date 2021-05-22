import React from 'react'
import Navbar from './Navbar/Navbar'
import { motion } from "framer-motion"

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

const Upsolve = () => {
    return (
        <motion.div exit={{ opacity: 0 }} transition={transition}>
            <motion.div initial={{ x: -20, y: 40 }} animate={{ x: 5, y: 40 }} transition={{ ease: "easeOut", duration: 1 }}>
                <Navbar />
            </motion.div>

        </motion.div>
    )
}

export default Upsolve
