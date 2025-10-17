import { motion } from "framer-motion";

export default function TextMotion() {
    const message = "We are enjoying Reactive Accelarator Course. LWS is awesome!!!";
    const wordsArray = message.split(" ");
    return (
        <div className="text-2xl m-4 text-center">
            {
                wordsArray.map((word, index) => (
                    <motion.span key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            // duration: 0.5,
                            duration: 1,
                            delay: index / 10,
                        }}>
                        {word} {' '}
                    </motion.span>
                ))
            }
        </div>
    );
}
