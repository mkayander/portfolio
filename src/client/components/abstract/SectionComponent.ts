import React, { ForwardRefRenderFunction } from "react";

type SectionComponentProps = {
    id?: string;
};

export const createSectionComponent = <T extends Record<string, unknown>>(
    render: ForwardRefRenderFunction<HTMLDivElement, SectionComponentProps & T>
) => React.forwardRef<HTMLDivElement, SectionComponentProps & T>(render);

export default createSectionComponent;
