import { motion } from "framer-motion";

export default function KeyFrame() {
    return (
        <motion.div className="bg-blue-500 border w-32 h-32 rounded-full"
            animate={{
                borderRadius: ["20%", "20%", "50%", "50%", "20%"], //5 break point
                rotate: [0, 90, 180, 270, 0],
                scale: [1, 1, 2, 1, 2],
            }}
            transition={{ duration: 1.7 }}
        // duration joto besi hobe, animation ta toto slow hobe. chokh e porbe.
        // buja jabe je animation hocche.
        />
    );
}
// Key Frame sob somoy array nei.array te joto khusi value rakhte pari.
