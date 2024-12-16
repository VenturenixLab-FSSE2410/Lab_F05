import {AppBar, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger} from "@mui/material";

export default function TopNavBar() {
  interface Props {
    children?: React.ReactElement<unknown>;
  }

  function HideOnScroll(props: Props) {
    const {children} = props;
    const trigger = useScrollTrigger();
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children ?? <div/>}
      </Slide>
    );
  }

  return (
    <>
      <CssBaseline/>
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Car Park Vacancy
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar/>
    </>
  )
}