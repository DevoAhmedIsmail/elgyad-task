import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const HomeSort = () => {
  const [costCenter, setCostCenter] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: {xs: "column",lg: "row"},
        gap: 1,
        my: "10px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: {xs: "column",lg: "row"},
        }}
      >
        <Typography minWidth="85px">مركز التكلفة</Typography>
        <FormControl>
          <Select
            sx={{
              "& .MuiSelect-select": { padding: "8px 32px 8px 0!important" },
              width: "300px",
              backgroundColor: "#fff",
            }}
            value={costCenter}
            onChange={(e) => setCostCenter(e.target.value)}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
        </FormControl>

        <FormGroup sx={{display: "flex", alignItems: "center",flexDirection: "row"}}>
            <FormControlLabel control={<Checkbox  />} label="عرض التفاصيل" />
            <FormControlLabel control={<Checkbox  />} label="عرض الحسابات الرئيسية" />
            <FormControlLabel control={<Checkbox  />} label="كل الحسابات" />
        </FormGroup>
      </Box>
    </Box>
  );
};

export default HomeSort;
