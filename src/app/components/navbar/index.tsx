import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { CenterMenuItems, HamburgerMenuItems } from "@/app/data/navbar";
import { CompanyName } from "@/app/data/general";

const NavbarComponent: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [isMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Navbar className="max-w-full mx-auto border-b-1 border-b-neutral-200 dark:border-b-neutral-800">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            {CompanyName}
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden lg:flex gap-4" justify="center">
          {CenterMenuItems.map((item) => {
            if (item.label === "Affiliates") {
              return (
                <NavbarItem key={item.label} isActive={pathname === item.href}>
                  <Link
                    color={pathname === item.href ? "primary" : "foreground"}
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className="font-semibold flex"
                  >
                    {item.label}&nbsp;
                    <Icon icon="entypo:new" className="text-sm mb-2" />
                  </Link>
                </NavbarItem>
              );
            }
            return (
              <NavbarItem key={item.label} isActive={pathname === item.href}>
                <Link
                  color={pathname === item.href ? "primary" : "foreground"}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="font-semibold"
                >
                  {item.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end" className="hidden lg:flex gap-4">
          <NavbarItem className="cursor-pointer">
            <Button
              variant="light"
              isIconOnly
              startContent={
                theme === "dark" ? (
                  <Icon icon="mingcute:sun-fill" height={20} width={20} />
                ) : (
                  <Icon
                    icon="mingcute:moon-fill"
                    height={20}
                    width={20}
                    color="gray"
                  />
                )
              }
              onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            />
          </NavbarItem>
          <NavbarItem className="">
            <Link href="signin" className="font-semibold">
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/signin" variant="solid">
              Get Started
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="flex lg:hidden" justify="end">
          <NavbarItem className="cursor-pointer">
            <Button
              variant="light"
              isIconOnly
              startContent={
                theme === "dark" ? (
                  <Icon icon="mingcute:sun-fill" height={20} width={20} />
                ) : (
                  <Icon
                    icon="mingcute:moon-fill"
                    height={20}
                    width={20}
                    color="gray"
                  />
                )
              }
              onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            />
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          />
        </NavbarContent>
        <NavbarMenu>
          {HamburgerMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
