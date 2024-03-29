import { Typography } from "@mui/material";
import * as React from "react";

export default function PostCategoryTitle({ children }) {
  return (
    <Typography variant="h6" sx={{ opacity: 0.9 }}>
      {children}
    </Typography>
  );
}
