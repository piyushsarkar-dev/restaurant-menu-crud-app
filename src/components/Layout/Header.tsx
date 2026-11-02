import { HouseIcon, StoreIcon, UtensilsIcon } from "lucide-react";
import Link from "next/link";
import GradientText from "../GradientText";
import { Button } from "../shadcnui/button";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B497CF"]}
              animationSpeed={20}
              variant="linear"
              glow={0}>
              RM Crud
            </GradientText>
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <HouseIcon className="size-4" />
                Home
              </span>
            </Button>
          </Link>
          <Link href="/food/create">
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <UtensilsIcon className="size-4" />
                Food
              </span>
            </Button>
          </Link>
          <Link href="/categories/create">
            <Button variant="ghost">
              <span className="flex items-center gap-2">
                <StoreIcon className="size-4" />
                Categories
              </span>
            </Button>
          </Link>
          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
