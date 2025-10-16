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
                Tap Me
            </motion.button>
        </div>
    );
}