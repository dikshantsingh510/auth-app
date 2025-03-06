import { CredentialsSignin } from "next-auth";

interface StateInterface {
  success?: string;
  error?: string;
}

export class CustomError extends CredentialsSignin {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.stack = undefined;
  }
} 
export default StateInterface;
