import React from "react";
import twemoji from "twemoji";

type TwemojiProps = {
    emoji: string;
};

const Twemoji: React.FC<TwemojiProps> = ({ emoji }) => {
    return <span dangerouslySetInnerHTML={{ __html: twemoji.parse(emoji, {}) }} />;
};

export default React.memo(Twemoji);
