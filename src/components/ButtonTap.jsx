import { motion } from "framer-motion";

export default function ButtonTap() {
    return (
        <div>
            <motion.button
                className="bg-black text-white p-1 border m-2 rounded-md"
                whileTap={{ scale: 0.5 }}
                whileHover={{
                    scale: 1.4
                }}>
                Tap Me 1
            </motion.button>

            <motion.button
                className="bg-black text-white p-1 border m-2 rounded-md"
                whileTap={{ scale: 0.5 }}
                whileHover={{
                    scale: 1.4,
                    transition: { yoyo: Infinity } // yoyo transition for smoothness
                }}>
                Tap Me 2
            </motion.button>
        </div>
    );
}

// the 1st button is working very fastly. but the 2nd button is working a bit slower
// than the 1st button for yoyo transition property.