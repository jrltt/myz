"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth.service";
import { LogIn } from "lucide-react";
import { useFormState, useFormStatus } from "react-dom";

function LoginButton() {
  const { pending } = useFormStatus();

  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button
      aria-disabled={pending}
      type="submit"
      variant={"z-blue"}
      onClick={handleClick}
      className="w-full"
    >
      <LogIn className="mr-4" />
      Login
    </Button>
  );
}
export default function LoginForm() {
  const [, dispatch] = useFormState(login, undefined);

  return (
    <div className="grid gap-4">
      <form action={dispatch}>
        <div className="grid gap-2 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="my@example.com"
            required
          />
        </div>
        <div className="grid gap-2 mb-8">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            pattern="^[A-Z][a-z]{2,}[0-9]+"
            required
          />
        </div>
        <LoginButton />
      </form>
    </div>
  );
}
