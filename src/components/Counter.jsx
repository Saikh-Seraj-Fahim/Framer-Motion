import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Counter() {
    const count = useMotionValue(0);
    const roundedValue = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, 100, { duration: 20 });
        return animation.stop;
    }, []);

    return (
        <motion.div>
            {roundedValue}
        </motion.div>
    );
}

// Motion values are special Framer Motion objects that can be animated and don't
// trigger re-renders when they change.

// see claude for explanation.