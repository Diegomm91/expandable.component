import React from 'react';
import ExpandableSectionImpl from '../../../impl/src/main/presentation/ExpandableSectionImpl.js';
const ExpandableSection = ({ title, children }) => {
    return (React.createElement(ExpandableSectionImpl, { title: title }, children));
};
export default ExpandableSection;
//# sourceMappingURL=ExpandableSection.js.map