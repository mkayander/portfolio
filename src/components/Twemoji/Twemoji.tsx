import React, { useEffect, useRef } from "react";
import twemoji from "twemoji";

enum TwemojiMode {
    parseNode,
    innerHtml,
}

type TwemojiProps = {
    emoji: string;
    mode?: TwemojiMode;
};

const Twemoji: React.FC<TwemojiProps> = ({ emoji, mode = TwemojiMode.parseNode }) => {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (mode === TwemojiMode.parseNode && ref.current) {
            ref.current && twemoji.parse(ref.current);
        }
    }, [mode]);

    switch (mode) {
        case TwemojiMode.innerHtml:
            return <span dangerouslySetInnerHTML={{ __html: twemoji.parse(emoji) }} />;

        default:
        case TwemojiMode.parseNode:
            return <span>{emoji}</span>;
    }
};

export default React.memo(Twemoji);
