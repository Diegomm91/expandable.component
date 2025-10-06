import React, { ReactNode, useState } from 'react';
import './expandable-section-tokens.css';

interface ExpandableSectionProps {
  title: string;
  children?: ReactNode;
  type?: 'simple' | 'highlighted';
  variant?: 'plain' | 'link';
  iconPosition?: 'left' | 'right' | 'none';
  titleHidden?: boolean;
}

const ExpandableSectionImpl: React.FC<ExpandableSectionProps> = ({ title, children, type = 'simple', variant = 'plain', iconPosition = 'right', titleHidden = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const sectionBaseClass = 'expandable-section';
  const sectionTypeClass = `expandable-${type}`;
  const sectionVariantClass = `expandable-${variant}`;
  const iconClass = `expandable-icon ${isExpanded ? 'expanded' : ''}`;
  const titleClass = `expandable-title ${titleHidden ? 'expandable-section__title--hidden' : ''}`;

  return (
    <div className={`${sectionBaseClass} ${sectionTypeClass} ${sectionVariantClass}`}>
      <div className="expandable-header" onClick={toggleExpand}>
        <h3 className={titleClass}>{title}</h3>
        {iconPosition !== 'none' && (
          <span className={iconClass}>&#9660;</span>
        )}
      </div>
      {isExpanded && <div className="expandable-content">{children}</div>}
    </div>
  );
};

export default ExpandableSectionImpl;