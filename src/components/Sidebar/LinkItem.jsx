import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { Fragment, useState } from "react";

const LinkItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      {item.nested ? (
        <>
          <ListItemButton sx={{ gap: "8px" }} onClick={handleClick}>
            <ListItemIcon sx={{ color: "#fff", minWidth: "auto" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText sx={{ textAlign: "right" }} primary={item.label} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit sx={{bgcolor: "#0e2e47"}}>
            <List component="div" disablePadding>
              {item.nested.map((nestedItem, index) => (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <ListItemText
                    sx={{ textAlign: "right" }}
                    primary={nestedItem.label}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItemButton sx={{ gap: "8px" }}>
          <ListItemIcon sx={{ color: "#fff", minWidth: "auto" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText sx={{ textAlign: "right" }} primary={item.label} />
        </ListItemButton>
      )}
    </>
  );
};

export default LinkItem;
