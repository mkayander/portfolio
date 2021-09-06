import React from "react";
import { FoldableContent } from "../../components";
import { createSectionComponent } from "../../components/abstract";
import { InfoSection } from "../../api/models";

type AboutMeSectionProps = {
    infoSections?: InfoSection[];
};

const AboutMeSection = createSectionComponent<AboutMeSectionProps>(({ id, infoSections }, ref) => {
    return (
        <section ref={ref} className="container">
            {infoSections?.map(item => (
                <FoldableContent
                    key={item.id}
                    emoji={item.emoji}
                    title={item.title}
                    innerHtml={item.content}
                    initiallyFolded={item.isInitiallyFolded}
                />
            ))}
        </section>
    );
});

export default AboutMeSection;
