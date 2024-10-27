import { AppSidebar } from "@/components/app-sidebar";
import { NotificationBadge } from "@/components/notification-badge";
import { SearchInput } from "@/components/search-input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BellIcon, ChevronDown, MailIcon } from "lucide-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <header className="flex h-20 border-b shrink-0 items-center gap-2">
          <div className="flex items-center justify-between gap-2 px-4 w-full">
            <SearchInput
              className="bg-secondary w-[30rem]"
              placeholder="Search properties, leads, contacts and more"
            />
            <div className="flex gap-2">
              <Button variant="outline" className="size-9 rounded-full">
                <NotificationBadge>
                  <MailIcon className="size-5" />
                </NotificationBadge>
              </Button>
              <Button variant="outline" className="size-9 rounded-full">
                <NotificationBadge>
                  <BellIcon className="size-5" />
                </NotificationBadge>
              </Button>
              <div className="border rounded-full w-16 flex items-center p-0.5 min-h-9 gap-1">
                <Avatar className="size-8">
                  <AvatarImage src="https://api.dicebear.com/9.x/dylan/svg?seed=Destiny" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <ChevronDown className="size-5 flex-shrink-0" />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
