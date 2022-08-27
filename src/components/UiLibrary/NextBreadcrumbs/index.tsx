import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { NextRouter, useRouter } from "next/router";
import { generateBreadcrumbs } from "../../../services";

interface CrumbProps {
  title: string;
  href: string;
  last: boolean;
}

const Crumb: React.FC<CrumbProps> = ({ title, href, last = false }) => {
  if (last) {
    return <Typography color="text.primary">{title}</Typography>;
  }
  return (
    <Link underline="hover" color="inherit" href={href}>
      {title}
    </Link>
  );
};

const NextBreadcrumbs = () => {
  const router: NextRouter = useRouter();
  const breadCrumbs = React.useMemo(
    () => generateBreadcrumbs(router),
    [router.asPath]
  );
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadCrumbs.map((crumb, idx) => (
        <Crumb {...crumb} key={idx} last={idx === breadCrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
};

export default NextBreadcrumbs;
