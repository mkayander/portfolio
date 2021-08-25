import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { usePopper } from "react-popper";
import styles from "./Dropdown.module.scss";

type PopupProps = {
    referenceRef: React.MutableRefObject<HTMLElement>;
};

export const Dropdown: React.FC<PopupProps> = ({ referenceRef, children }) => {
    const [isVisible, setVisibility] = useState(false);

    const [popper, popperRef] = useState(null);
    const [arrow, arrowRef] = useState(null);

    const { styles: popperStyles, attributes } = usePopper(referenceRef.current, popper, {
        placement: "bottom",
        modifiers: [
            {
                name: "offset",
                enabled: true,
                options: { offset: [0, 10] },
            },
            {
                name: "arrow",
                options: { element: arrow },
            },
            // {
            //     name: "preventOverflow",
            //     options: {},
            // },
        ],
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
        <div
            ref={popperRef}
            className={classNames(styles.root, {
                [styles.active]: isVisible,
            })}
            style={popperStyles.popper}
            {...attributes.popper}>
            <div className={styles.arrow} ref={arrowRef} style={popperStyles.arrow} data-popper-arrow="" />
            <ul style={popperStyles.offset}>{children}</ul>
        </div>
    );
};

export default Dropdown;
