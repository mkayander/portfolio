import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import styles from "./Dropdown.module.scss";

type PopupProps = {
    referenceRef: React.MutableRefObject<HTMLElement>;
};

export const Dropdown: React.FC<PopupProps> = ({ referenceRef, children }) => {
    const [isVisible, setVisibility] = useState(false);

    const popperRef = useRef(null);

    const { styles: popperStyles, attributes } = usePopper(referenceRef.current, popperRef.current, {
        placement: "bottom",
        modifiers: [{ name: "offset", enabled: true, options: { offset: [0, 10] } }],
    });

    useEffect(() => {
        const handleDocumentClick = (ev: MouseEvent) => {
            if (referenceRef.current.contains(ev.target as Node)) {
                return;
            }
            setVisibility(false);
        };

        document.addEventListener("click", handleDocumentClick);
        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [referenceRef]);

    useEffect(() => {
        const reference = referenceRef.current;

        const handleDropdownClick = () => {
            setVisibility(!isVisible);
        };

        reference?.addEventListener("click", handleDropdownClick);
        return () => {
            reference?.removeEventListener("click", handleDropdownClick);
        };
    }, [isVisible, referenceRef]);

    return (
        <div ref={popperRef} style={popperStyles.popper} {...attributes.popper}>
            <ul
                className={classNames(styles.container, {
                    [styles.active]: isVisible,
                })}
                style={popperStyles.offset}>
                {children}
            </ul>
        </div>
    );
};

export default Dropdown;
