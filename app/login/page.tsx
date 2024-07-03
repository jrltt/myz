import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/app/login/components/login-form";

export default async function Login() {
  return (
    <>
      <Card className="mx-auto max-w-sm mt-10">
        <CardHeader>
          <CardTitle className="text-2xl">Login My Z</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </>
  );
}
