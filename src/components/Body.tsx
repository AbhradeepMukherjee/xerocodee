"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import XeroCodee from "./XeroCodee";
import appwriteService from "@/controllers/authController";
export default function Body({selectedMenuItem}) {

  const renderContent = () => {
    switch (selectedMenuItem) {
      case 'XeroCodee':
        return <XeroCodee/>;
      case 'Builder Center':
        return <Typography variant="h4" color="black" fontFamily="nunito">This is the Builder Center.</Typography>;
      case 'Service Board':
        return <Typography variant="h4" color="black" fontFamily="nunito">Here is the Service Board.</Typography>;
      case 'Clusters':
        return <Typography variant="h4" color="black" fontFamily="nunito">Manage your Clusters here.</Typography>;
      case 'Databases':
        return <Typography variant="h4" color="black" fontFamily="nunito">View your Databases here.</Typography>;
      case 'Environment':
        return <Typography variant="h4" color="black" fontFamily="nunito">Environment settings are here.</Typography>;
      case 'Workflow':
        return <Typography variant="h4" color="black" fontFamily="nunito">Workflow management.</Typography>;
      case 'Monitoring':
        return <Typography variant="h4" color="black" fontFamily="nunito">Monitoring tools and reports.</Typography>;
      case 'Security':
        return <Typography variant="h4" color="black" fontFamily="nunito">Security settings.</Typography>;
      case 'Web Hooks':
        return <Typography variant="h4" color="black" fontFamily="nunito">Manage your Web Hooks.</Typography>;
      case 'Log Error':
        return <Typography variant="h4" color="black" fontFamily="nunito">View Log Errors.</Typography>;
      default:
        return <Typography variant="h4" color="black" fontFamily="nunito">Welcome to XeroCodee!</Typography>;
    }
  };
  return (
    <Box sx={{ flexGrow: 1, p: 3, mb: 5 }}>{renderContent()}</Box>
  );
}
