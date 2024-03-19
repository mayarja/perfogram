import React, { useEffect, useState } from "react";
import "./ToolTipsFolder.scss";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import useClickOutside from "../../useClickOutside";

export function TooltipBoxAction({
  title,
  children,
  status,
  placement,
  b6e5,
  classNeed,
}) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (status) {
      handleTooltipClose();
    }
  }, [status]);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#fff",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      borderColor: "rgba(27, 31, 41, 0.2)",
    },

    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "4px",
      border: "1px solid rgba(27, 31, 41, 0.2)",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      color: "inherit",
      minWidth: "175px",
      maxWidth: "280px",
      margin: "0px",
      padding: "4px 0px",
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div style={{ height: b6e5 && "100%" }}>
        <CustomTooltip
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement={placement ? placement : "bottom"}
          title={title}
        >
          <div
            className={classNeed ? classNeed : ""}
            onClick={handleTooltipOpen}
          >
            {children}
          </div>
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
}

export function TooltipMobileAction({
  title,
  children,
  status,
  placement,
  b6e5,
  classNeed,
}) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (status) {
      handleTooltipClose();
    }
  }, [status]);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#fff",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      borderColor: "rgba(27, 31, 41, 0.2)",
    },
    [`& .${tooltipClasses.popper}`]: {
      inset: "0px auto auto -2px ",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "4px",
      border: "1px solid rgba(27, 31, 41, 0.2)",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      color: "inherit",
      // minWidth: "200px",
      // maxWidth: "280px",
      margin: "0px",
      padding: "4px 0px",
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div style={{ height: b6e5 && "100%" }}>
        <CustomTooltip
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement={placement ? placement : "bottom"}
          title={title}
        >
          <div
            className={classNeed ? classNeed : ""}
            onClick={handleTooltipOpen}
          >
            {children}
          </div>
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
}
export function BoxTooltipTitle({
  title,
  children,
  placement,
  bigWidth,
  backgroundColor,
}) {
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: backgroundColor ? backgroundColor : theme.palette.common.black,
      maxWidth: bigWidth ? "340px" : "340px", // Add max-width style
      overflowWrap: "break-word", // Add overflow-wrap style
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: backgroundColor
        ? backgroundColor
        : theme.palette.common.black,
      fontSize: "1.4rem",
      fontFamily: '"Noto Sans JP", Prompt, sans-serif', // Add font-family style
      lineHeight: 1.4, // Add line-height style
      minWidth: bigWidth ? "340px" : "inherit",
    },
  }));

  return (
    <CustomTooltip arrow placement={placement} title={title}>
      <div>{children}</div>
    </CustomTooltip>
  );
}

export function TooltipBoxsetting({ title, children, status }) {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (status) {
      handleTooltipClose();
    }
  }, [status]);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: "#fff",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      borderColor: "rgba(27, 31, 41, 0.2)",
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "rgb(255, 255, 255)",
      borderRadius: "4px",
      border: "1px solid rgba(27, 31, 41, 0.2)",
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 3px 12px -3px",
      color: "inherit",
      minWidth: "200px",
      maxWidth: "280px",
      margin: "0px",
      padding: "4px 0px",
      listStyleType: "none",
      display: "flex",
      flexDirection: "column",
    },
  }));

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <CustomTooltip
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement="bottom"
          title={title}
        >
          <div onClick={handleTooltipOpen}>{children}</div>
        </CustomTooltip>
      </div>
    </ClickAwayListener>
  );
}
