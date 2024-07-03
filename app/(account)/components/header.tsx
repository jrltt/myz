import Link from "next/link";

export function Header() {
  return (
    <ul>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>Products</li>
      <li>Claims</li>
      <li>Documents</li>
      <li>Messages</li>
      <li>Contact</li>
      <li>
        <Link href="/settings">Settings</Link>
      </li>
    </ul>
  );
}
