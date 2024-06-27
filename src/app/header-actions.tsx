"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Loader2 } from "lucide-react";

const HeaderActions = () => {
  return (
    <>
      <Unauthenticated>
        <Button variant="outline" size="site">
          <SignInButton />
        </Button>
        <Button variant="site" size="site">
          <SignUpButton />
        </Button>
      </Unauthenticated>
      <Authenticated>
        <UserButton />
      </Authenticated>
      <AuthLoading>
        <Loader2 className="w-7 h-7 animate-spin text-slate-600 dark:text-slate-100" />
      </AuthLoading>
    </>
  );
};

export default HeaderActions;
