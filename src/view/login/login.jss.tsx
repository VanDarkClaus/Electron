import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => {
  return {
    root: {
      width: "100%",
      height: "100%"
    },
    login: {
      width: "100%",
      height: "100%",
      background: `url(${require("../../images/login/bg.jpg")}) no-repeat center`
    },
    loginTop: {
      display: "flex",
      justifyContent: "flex-end",
      marginRight: "3vw"
    },
    topRight: {
      width: "478px",
      height: "51px",
      marginTop: "31px",
      flexWrap:"nowrap"
    },
    sunImg: {
      width: "67px",
      height: "48px"
    },
    loginYear: {
      width: "136px",
      height: "33px",
      fontFamily: "PingFangSC-Semibold",
      fontSize: "24px",
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: "0px",
      color: "#ffffff",
      marginLeft: "28px"
    },
    loginWeek: {
      width: "94px",
      height: "33px",
      fontFamily: "PingFangSC-Semibold",
      fontSize: "24px",
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: "7.1px",
      color: "#ffffff",
      marginLeft: "21px",
      marginRight: "24px"
    },
    loginDay: {
      display: "inline-block",
      width: "100px",
      height: "45px",
      fontFamily: "PingFangSC-Semibold",
      fontSize: "32px",
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: "7px",
      color: "#ffffff"
    },
    loginMain: {
      display: "flex",
      // justifyContent:'center',
      alignItems: "center",
      flexDirection: "column"
    },
    headerImg: {
      display: "inline-block",
      width: "115px",
      height: "115px",
      marginBottom: "5vh",
      marginTop: "20vh",
      borderRadius:'50%'
    },
    loginInput: {
      
      width: "201px",
      height: "42px",
      backgroundColor: "#5a679c",
      borderRadius: "6px",
      borderWidth:'0',
      fontFamily: "PingFangSC-Regular",
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: "0px",
      color: "#ffffff",
      paddingLeft: "12px",
      boxSizing: "border-box",
      marginBottom: "5vh"
    },
    loginClick: {
      width: "30px",
      height: "30px"
    },
    loginBottom: {
      width: "461px",
      height: "50px",
      marginTop: "16vh",
      display: "flex",
      marginLeft: "50%",
      transform: "translateX(-50%)",
      justifyContent: "space-between"
    },
    loginBottomUK: {
      // width: "63px",
      height: "26px",
      fontFamily: "PingFangSC-Regular",
      fontSize: "18px",
      fontWeight: "normal",
      fontStretch: "normal",
      letterSpacing: "0px",
      color: "#ffffff",
      display:'flex',
      alignItems:'center',
      marginLeft:'15px'
    }
  };
});

export default useStyle;
