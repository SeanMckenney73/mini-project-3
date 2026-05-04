import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import Login from "./Login";
import Register from "./Register";
import UpdateProfile from "./Updateuser";
import { Container, Button } from "react-bootstrap";

function AccountPage() {
  const { currentUser } = useUserContext();
  const [showRegister, setShowRegister] = useState(false);

  // 1. If logged in, show the Update Profile component
  if (currentUser?.id) {
    return <UpdateProfile />;
  }

  // 2. If not logged in, toggle between Login and Register
  return (
    <Container className="text-center mt-5">
      {showRegister ? <Register /> : <Login />}

      <Button 
        variant="link" 
        onClick={() => setShowRegister(!showRegister)}
        className="mt-3"
      >
        {showRegister 
          ? "Already have an account? Log In" 
          : "Don't have an account? Register"}
      </Button>
    </Container>
  );
}

export default AccountPage;