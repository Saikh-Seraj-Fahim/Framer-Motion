// This is main animation.

import { motion } from "framer-motion";

const Box = ({ text }) => {
    return (
        <motion.div className="w-44 h-44 border rounded-sm bg-pink-300 text-black 
        m-4 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1
                }
            }}
            viewport={{ once: false }}>
            {text}
        </motion.div>
    );
}
export default function ScrollReveal() {
    const greetings = ["Hello", "Holla", "Welcome", "Salam", "Come In"];
    return (
        <div>
            {greetings.map((greeting, index) => (
                <Box key={index} text={greeting} />
            ))}
        </div>
    );
}