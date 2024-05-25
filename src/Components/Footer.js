import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListSubheader from "@mui/joy/ListSubheader";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

export const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: "sm" },
      }}
    >
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { md: "flex-end" },
          justifyContent: "flex-end",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <List
          size="sm"
          orientation="horizontal"
          wrap
          sx={{ flexGrow: 0, "--ListItem-radius": "8px" }}
        >
          <ListItem nested sx={{ width: { xs: "50%", md: 140 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Services</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>About</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact Us</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested sx={{ width: { xs: "50%", md: 180 } }}>
            <ListSubheader sx={{ fontWeight: "xl" }}>Social</ListSubheader>
            <List>
              <ListItem>
                <IconButton
                  onClick={() => {
                    window.open("https://github.com/abbas-13", "_blank");
                  }}
                  variant="plain"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton variant="plain">
                  <FacebookIcon />
                </IconButton>
                <IconButton variant="plain">
                  <InstagramIcon />
                </IconButton>
                <IconButton variant="plain">
                  <XIcon />
                </IconButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
