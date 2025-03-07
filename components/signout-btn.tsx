import { signout } from "@/actions/user";
import { Button } from "./ui/button";

const SignoutBtn = () => {
  return (
    <form action={signout}>
      <Button type="submit" variant="secondary" className="w-80 cursor-pointer">
        Logout
      </Button>
    </form>
  );
};

export default SignoutBtn;
