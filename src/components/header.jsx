import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const navItems = [
  { label: "Home", path: "/" },
    { label: "C-a-thunkTodo", path: "/cattodo" },
  { label: "C-a-thunkCategories", path: "/catcategories" },
];

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "center", gap: 2, flexWrap: 'wrap' }}>
        {navItems.map((item) => (
          <Button
            key={item.path}
            component={NavLink}
            to={item.path}
            sx={{
              color: 'white',
              fontSize: '18px',
              '&.active': {
                fontWeight: 'bold',
                borderBottom: '2px solid white',
              }
            }}
          >
            {item.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
