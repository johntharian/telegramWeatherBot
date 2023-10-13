import { GoogleLogin } from "@react-oauth/google";

const Login = ({ setCredentialResponse }) => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        setCredentialResponse(credentialResponse);
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default Login;
