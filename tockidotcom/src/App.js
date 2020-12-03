import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Practice from "./Components/Practice";
import Learning from "./Components/Learning";
import Battle from "./Components/Battle";
import History from "./Components/History";
import Evaluate from "./Components/Evaluate";
import React, {useState} from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import HistoryIcon from "@material-ui/icons/History";
import PersonIcon from "@material-ui/icons/Person";
import Setting from "@material-ui/icons/Settings";
import Competion from "./Components/Competion";
import HomePage from "./Components/HomePage";

import KeyboardIcon from '@material-ui/icons/Keyboard';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HistoryIcon from '@material-ui/icons/History';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Tốc ký trong tầm tay bạn
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItem>
          </Link>
          <Link
            to="/learning"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Học gõ" />
            </ListItem>
          </Link>
          <Link
            to="/practice"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Luyện tập" />
            </ListItem>
          </Link>
          <Link to="/battle" style={{ textDecoration: "none", color: "black" }}>
            <ListItem button>
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText primary="Thi đấu" />
            </ListItem>
          </Link>
          <Link
            to="/evaluate"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <TrendingUpIcon />
              </ListItemIcon>
              <ListItemText primary="Đánh giá" />
            </ListItem>
          </Link>
          <Link
            to="/history"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="Lịch sử" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {["Thông tin cá nhân", "Cài đặt"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <PersonIcon /> : <Setting />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/competition">
            <Competion />
          </Route>
          <Route path="/battle">
            <Battle />
          </Route>
          <Route path="/practice">
            <Practice />
          </Route>
          <Route path="/learning">
            <Learning />
          </Route>
          <Route path="/history">
            <History />
          </Route>
          <Route path="/evaluate">
            <Evaluate />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
