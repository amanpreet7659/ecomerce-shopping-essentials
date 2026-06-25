import type { FC } from "react";
import { Link } from "react-router-dom";

interface BreadCrumbItem {
  label: string;
  path?: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
}

const Breadcrumbs: FC<BreadCrumbProps> = ({ items }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (<span key={index}>
            {!isLast && item.path ? (<Link to={item.path}>{item.label}</Link>) : (<span className="breadcrumb__current">{item.label}</span>)}
            {!isLast && (<span className="breadcrumb__sep"> /</span>)}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;