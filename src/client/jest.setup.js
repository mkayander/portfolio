import "@testing-library/jest-dom/extend-expect";

// jest.setup.js
// Fix next img in test env
// https://github.com/vercel/next.js/issues/18393#issuecomment-783269086
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
    configurable: true,
    // eslint-disable-next-line react/display-name
    value: props => <OriginalNextImage {...props} unoptimized />,
});
