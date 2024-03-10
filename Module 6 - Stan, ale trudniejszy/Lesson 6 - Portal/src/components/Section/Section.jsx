import { useState } from "react";
import { createPortal } from "react-dom";
import { Modal } from "../Modal/Modal";
import "./Section.css";

export function Section() {
    const [isModelShown, setIsModelShown] = useState(false);
    const modal = createPortal(
        <Modal onClose={() => setIsModelShown(false)} />,
        document.body
    );

    return (
        <section>
            <h2>Nie czekaj!</h2>
            <h3>Otwórz modal!</h3>
            <button onClick={() => setIsModelShown(true)}>Otwórz</button>
            {isModelShown && modal}
        </section>
    );
}
