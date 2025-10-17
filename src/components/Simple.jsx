import { motion } from "motion/react";

export default function Simple() {
    return (
        <motion.div className="bg-red-500 border w-32 h-32 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        />
    );
}

// initial - starting state of your animation — how the element looks before
// it animates in.

// animate - ending state — what the element should look like after the animation.

// transition - This defines how the movement happens.