// import ButtonTap from "./components/ButtonTap";
// import KeyFrame from "./components/KeyFrame";
// import Simple from "./components/Simple";
// import TextMotion from "./components/TextMotion";
// import TransitionType from "./components/TransitionType";
// import Variants from "./components/Variants";
// import Counter from "./components/Counter";
// import ScrollReveal from "./components/ScrollReveal";

// export default function App() {
//     return (
//         // <Simple/>
//         // <KeyFrame/>
//         // <ButtonTap />
//         // <TextMotion/>
//         // <TransitionType />
//         // <Variants />
//         // <Counter />
//         <ScrollReveal />
//     );
// }





// Exit Animation:

import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./components/Home";
import ButtonTap from "./components/ButtonTap";
import Keyframe from "./components/Keyframe";
import Simple from "./components/Simple";
import TextMotion from "./components/TextMotion";
import TransitionType from "./components/TransitionType";
import Variants from "./components/Variants";
import Counter from "./components/Counter";
import ScrollReveal from "./components/ScrollReveal";

import { AnimatePresence } from "framer-motion";

export default function App() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/simple" element={<Simple />} />
                    <Route path="/keyframe" element={<Keyframe />} />
                    <Route path="/button-tap" element={<ButtonTap />} />
                    <Route path="/text-motion" element={<TextMotion />} />
                    <Route path="/transition" element={<TransitionType />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/scroll" element={<ScrollReveal />} />
                    <Route path="/variants" element={<Variants />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

// Exit Animation code is fully written but not running. Try to run it.
// Also Swagger is remaining.
