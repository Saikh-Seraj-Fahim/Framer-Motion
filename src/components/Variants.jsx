// import { motion } from "framer-motion";

// const shapeVariants = {
//     initial: {
//         opacity: 0,
//         y: "-100vh"
//     },
//     animate: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: 1,
//             duration: 1,
//             type: "spring"
//         }
//     },
// }
// export default function Variants() {
//     return (
//         <motion.div variants={shapeVariants}
//             initial="initial"
//             animate="animate"
//             className="bg-green-700 w-32 h-32 rounded border m-4"
//         />
//     );
// }



import { motion } from "framer-motion";

const shapeVariants = { // parent variant
    initialShape: {
        opacity: 0,
        y: "-100vh"
    },
    animatedShape: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            type: "spring"
        }
    },
}

const childVariants = { // child variant
    initialShape: {
        scale: 1
    },
    animatedShape: {
        scale: 2,
        transition: {
            duration: 6,
        }
    },
}

export default function Variants() {
    return (
        <motion.div variants={shapeVariants}
            initial="initialShape"
            animate="animatedShape"
            className="bg-green-700 w-32 h-32 rounded border m-4">
            <motion.div variants={childVariants}
                className="bg-red-500 w-12 h-12 rounded-full border m-2"
            />
        </motion.div>
    );
}

// child variant e jodi initial property er name ar animated property er name
// parent variant er same hoi, tahole child div/element e variants dilei hoi sudhu.
// extra kore initial, animate ar likha lage na.
