/// <reference types="next" />
/// <reference types="next/types/global" />
// /// <reference types="next/image-types/global" />

// /// <reference types="next-images" />

declare module "*.component.svg" {
    import React = require("react");

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module "*.svg" {
    const content: {
        src: string;
        height: number;
        width: number;
        blurDataURL: string;
    };
    export default content;
}

// declare module '*.css' {
//     const content: Record<string, string>;
//     export default content;
// }
//
declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.png" {
    const content: {
        src: string;
        height: number;
        width: number;
        blurDataURL: string;
    };
    export default content;
}
