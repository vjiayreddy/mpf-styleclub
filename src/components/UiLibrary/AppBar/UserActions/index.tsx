import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import LocalMallIcon from "@mui/icons-material/LocalMallOutlined";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import UIIconButton from "../../IconButton";
import IconButton from "@mui/material/IconButton";
import { useSession } from "next-auth/react";
import { AUTH_STATE } from "../../../../utils/enums";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import { ROUTES } from "../../../../routes/Routes";
import UserActionMenu from "../UserMenu";

interface UserActionsProps {
  session: any;
}

const UserActions: React.FC<UserActionsProps> = ({ session }) => {
  const { status } = useSession();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const prevOpen = React.useRef(open);
  const router = useRouter();

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleClickUserIcon = () => {
    if (status === AUTH_STATE.UNAUTHENTICATED) {
      router.push(ROUTES.LOGIN);
    }
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <>
      <Grid spacing={3} container alignItems="center">
        <Grid item>
          <UIIconButton size="small" onClick={() => {}} icon={<SearchIcon />} />
        </Grid>
        <Grid item>
          <UIIconButton
            size="small"
            onClick={handleClickUserIcon}
            icon={
              <Badge badgeContent={4} color="secondary">
                <LocalMallIcon />
              </Badge>
            }
          />
        </Grid>
        <Grid item>
          <IconButton
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "user-action-menu" : undefined}
            ref={anchorRef}
            onClick={() => {
              setOpen(!open);
            }}
          >
            {status === AUTH_STATE.LOADING ? (
              <>
                <CircularProgress size={18} />
              </>
            ) : (
              <>
                {session ? (
                  <Avatar
                    src={session.user["images"]["profile"]}
                    sx={{ width: 24, height: 24 }}
                  >
                    U
                  </Avatar>
                ) : (
                  <Avatar sx={{ width: 24, height: 24 }} />
                )}
              </>
            )}
          </IconButton>
        </Grid>
      </Grid>
      <UserActionMenu
        anchorEl={anchorRef.current}
        onKeyDown={handleListKeyDown}
        handleClose={handleClose}
        open={open}
      ></UserActionMenu>
    </>
  );
};

export default memo(UserActions);
