import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nectar Home" },
    { name: "description", content: "Welcome to Nectar!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
