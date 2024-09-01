import {
  Button,
  Grid,
  IconButton,
  OutlinedInput,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import {
  IFormFieldDetails,
  IFormFields,
  loginFormDetails,
  signUpFormDetails,
} from "../constant";

import {
  ArrowForward,
  Close,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";

interface IFormProps {
  isHomePage: boolean;
  isLoginPage: boolean;
  onClose: () => void;
  showForm: boolean;
}

// const styles: Record<string, React.CSSProperties> = {};

const StyledBox = styled(Grid)({
  maxWidth: "470px",
  // height: " 420px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid #969696",
  borderRadius: "8px",
  backgroundColor: "#27292D",
  padding: "24px 16px",
  position: "fixed",
  top: "calc(50% - 263px)",
  left: "calc(50% - 238px)",
});

export default function FormModal(props: IFormProps) {
  const { isHomePage, isLoginPage, showForm, onClose } = props;
  const [loginPage, setLoginPage] = React.useState(isLoginPage);
  const details = loginPage ? loginFormDetails : signUpFormDetails;
  const [showPassword, setShowPassword] = React.useState(true);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      {showForm && (
        <StyledBox container>
          <Grid container flexDirection={"row"}>
            <Grid width={isHomePage ? "90%" : "100%"}>
              <Typography color={"#6B6C70"} fontWeight={500}>
                {details.loginHeading1}
              </Typography>
              <Typography color={"#FFFFFF"} fontWeight={600} fontSize={"18px"}>
                {details.loginHeading2}
              </Typography>
            </Grid>
            {isHomePage && (
              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                bgcolor={"#131319"}
                width={"32px"}
                height={"32px"}
                borderRadius={"30px"}
                onClick={onClose}
              >
                <Close
                  style={{ color: "white", width: "16px", height: "16px" }}
                ></Close>
              </Grid>
            )}
          </Grid>
          <Grid
            container
            flexDirection="column"
            alignItems="flex-start"
            py={"16px"}
          >
            {Object.keys(details.formFields).map((key) => {
              const field: IFormFieldDetails = details.formFields[
                key as keyof IFormFields
              ] || { label: "", placeholder: "" };
              return (
                <Grid item key={key} width="100%" pb="8px" pt="16px">
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Typography pb="8px" color={"#C5C7CA"} fontWeight={500}>
                      {field.label}
                    </Typography>
                    {key === "password" && (
                      <Typography
                        pb="8px"
                        color={"#C5C7CA"}
                        fontWeight={500}
                        fontSize="12px"
                      >
                        Forgot password?{" "}
                      </Typography>
                    )}
                  </Grid>
                  <OutlinedInput
                    type={
                      key === "password" && !showPassword ? "password" : "text"
                    }
                    fullWidth
                    placeholder={field.placeholder}
                    sx={{
                      "& input::placeholder": {
                        color: "white",
                        fontSize: "16px",
                      },
                      "& input": {
                        color: "white",
                      },
                    }}
                    endAdornment={
                      key === "password" ? (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "grey",
                            },
                          }}
                        >
                          {showPassword ? (
                            <VisibilityOutlined />
                          ) : (
                            <VisibilityOffOutlined />
                          )}
                        </IconButton>
                      ) : undefined
                    }
                  />
                </Grid>
              );
            })}
          </Grid>

          <Button
            variant="contained"
            fullWidth
            sx={{
              textTransform: "none",
              fontSize: "16px",
            }}
          >
            {details.btnCTA}
          </Button>
          <Grid container py="8px">
            <Typography
              variant="body2"
              component="div"
              color={"#6B6C70"}
              fontWeight={500}
              fontSize={"14px"}
            >
              {details.subheading}&nbsp;
            </Typography>
            <Button
              sx={{
                textTransform: "none",
                padding: 0,
                minWidth: "auto",
                lineHeight: "inherit",
                fontSize: "14px",
                color: "white",
                fontWeight: 500,
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => setLoginPage(!loginPage)}
              endIcon={<ArrowForward style={{ fontSize: "14px" }} />}
            >
              {loginPage ? "Register" : "Login"}
            </Button>
          </Grid>
        </StyledBox>
      )}
    </>
  );
}
