import React from 'react';
import ExpandableSectionImpl from "../../../impl/src/main/presentation/ExpandableSectionImpl";


interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  type?: 'simple' | 'highlighted';
  variant?: 'plain' | 'link';
  iconPosition?: 'left' | 'right' | 'none';
  titleHidden?: boolean;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({ title, children, type = 'simple', variant = 'plain', iconPosition = 'right', titleHidden = false }) => {

  return (
    <ExpandableSectionImpl title={title} type={type} variant={variant} iconPosition={iconPosition} titleHidden={titleHidden}>{children}</ExpandableSectionImpl>
  );
};

export default ExpandableSection;