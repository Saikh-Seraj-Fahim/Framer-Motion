// import { motion } from "framer-motion";

// export default function TransitionType() {
//     return (
//         <motion.div
//             className="m-8"
//             initial={{ opacity: 0, x: "-100vh" }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//         >
//             <h1>Learning Animation</h1>
//             <p>We love animation. We are enjoying it a lot. Framer motion is great.</p>
//         </motion.div>
//     );
// }

// 3 types of transition: 1)Tween, 2)Spring, 3)Inertia.
// The above code is Tween transition type.




// import { motion } from "framer-motion";

// export default function TransitionType() {
//     return (
//         <motion.div
//             className="m-8"
//             initial={{ opacity: 0, x: "-100vh" }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ type: 'spring', duration: 3 }}
//         >
//             <h1>Learning Animation</h1>
//             <p>We love animation. We are enjoying it a lot. Framer motion is great.</p>
//         </motion.div>
//     );
// }

// The above code is Spring transition type.




import { motion } from "framer-motion";

export default function TransitionType() {
    return (
        <motion.div
            className="m-8"
            initial={{ opacity: 0, x: "-100vh" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', bounce: 0.7, duration: 3 }}
        >
            <h1>Learning Animation</h1>
            <p>We love animation. We are enjoying it a lot. Framer motion is great.</p>
        </motion.div>
    );
}

// The above code is Spring transition type with bounce.
