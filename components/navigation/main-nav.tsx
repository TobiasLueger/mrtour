"use client";

import { MapPin, Bell, Star, Disc } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/">
              <Logo />
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link 
                href="/" 
                className={cn(
                  "transition-colors",
                  pathname === "/" ? "text-white" : "text-white/60 hover:text-orange-500"
                )}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className={cn(
                  "transition-colors",
                  pathname === "/about" ? "text-white" : "text-white/60 hover:text-orange-500"
                )}
              >
                About
              </Link>
              <Link 
                href="/destinations"
                className={cn(
                  "transition-colors",
                  pathname === "/destinations" ? "text-white" : "text-white/60 hover:text-orange-500"
                )}
              >
                Destinations
              </Link>
              <Link 
                href="/tours"
                className={cn(
                  "transition-colors",
                  pathname === "/tours" ? "text-white" : "text-white/60 hover:text-orange-500"
                )}
              >
                Tours
              </Link>
              <Link 
                href="/blog"
                className={cn(
                  "transition-colors",
                  pathname === "/blog" ? "text-white" : "text-white/60 hover:text-orange-500"
                )}
              >
                Blog
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-orange-500">
              <MapPin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-orange-500">
              <Bell className="h-5 w-5" />
            </Button>
            <div className="bg-orange-500 rounded-full p-2">
              <Star className="h-5 w-5 text-white" />
            </div>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-orange-500">
              <Disc className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}