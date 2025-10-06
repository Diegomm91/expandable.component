import React from 'react';
import './expandable-section-tokens.css';
const ExpandableSectionImpl = ({ title, children }) => {
    return (React.createElement("div", null,
        React.createElement("h3", null, title),
        children));
};
export default ExpandableSectionImpl;
//# sourceMappingURL=ExpandableSectionImpl.js.map