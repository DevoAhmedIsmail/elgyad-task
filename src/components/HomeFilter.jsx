import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { BsFileEarmarkExcel } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";

const HomeFilter = () => {
  const [period, setPeriod] = useState("شهري");
  const [account, setAccount] = useState(
    "شركة الرشيد التجارية المتحده #132646848497"
  );
  const [year, setYear] = useState("2023");
  const [branches, setBranches] = useState("جميع الفروع");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: { xs: "start", lg: "center" },
        flexDirection: { xs: "column", lg: "row" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography minWidth="65px">نوع الفترة</Typography>
        <FormControl>
          <Select
            sx={{
              "& .MuiSelect-select": { padding: "8px 32px 8px 0!important" },
              width: { xs: "300px", lg: "100px" },
              backgroundColor: "#fff",
            }}
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
          >
            <MenuItem value="شهري">شهري</MenuItem>
            <MenuItem value="سنوي">سنوي</MenuItem>
            <MenuItem value="يومي">يومي</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "start", lg: "center" },
          flexDirection: { xs: "column", lg: "row" },
          gap: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography>الحساب</Typography>
          <FormControl>
            <Select
              sx={{
                "& .MuiSelect-select:first-of-type": {
                  padding: "8px 32px !important",
                  width: { xs: "243px", lg: "200px" },
                },
                backgroundColor: "#fff",
              }}
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            >
              <MenuItem value="شركة الرشيد التجارية المتحده #132646848497">
                شركة الرشيد التجارية المتحده #132646848497
              </MenuItem>
              <MenuItem value="شركه 2">شركه 2</MenuItem>
              <MenuItem value="شركه 3">شركه 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
          <Typography minWidth="84px">للسنة المالية</Typography>
          <FormControl>
            <Select
              sx={{
                "& .MuiSelect-select": { padding: "8px 32px 8px 0!important" },
                backgroundColor: "#fff",
                width: "100px",
              }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
            </Select>
          </FormControl>

          <FormControl>
            <Select
              sx={{
                "& .MuiSelect-select": { padding: "8px 32px 8px 0!important" },
                backgroundColor: "#fff",
                width: "200px",
              }}
              width="300px"
              value={branches}
              onChange={(e) => setBranches(e.target.value)}
            >
              <MenuItem value="جميع الفروع">جميع الفروع</MenuItem>
              <MenuItem value="فرع 1">فرع 1</MenuItem>
              <MenuItem value="فرع 2">فرع 2</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box>
        <IconButton>
          <BsFileEarmarkExcel />
        </IconButton>
        <IconButton>
          <FiPrinter />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HomeFilter;
