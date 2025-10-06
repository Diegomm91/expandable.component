import React, { ReactNode } from 'react';
import './expandable-section-tokens.css';
interface ExpandableSectionProps {
    title: string;
    children?: ReactNode;
}
declare const ExpandableSectionImpl: React.FC<ExpandableSectionProps>;
export default ExpandableSectionImpl;
