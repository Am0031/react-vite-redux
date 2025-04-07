import { Box, Typography } from "@mui/material";
export const Footer: any = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        px: 1,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[600],
      }}
    >
      <Typography variant="body2" color="textSecondary" align="center">
        © 2025 RoT Village Show. All rights reserved.
      </Typography>
    </Box>
  );
};
