import {
    Box,
    Collapse,
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
  } from "@mui/material";

  import { Send, StarBorder } from "@mui/icons-material";
import linksData from "./linksData";
import LinkItem from "./LinkItem";


const LinksList = () => {
  return (
    <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#1e5b8a" }}
        component="nav"

        >
            {
                linksData.map((item, index)=>(
                    <LinkItem key={index} item={item} />
                ))
            }

            
    </List>
  )
}

export default LinksList