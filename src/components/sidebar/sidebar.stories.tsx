import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./sidebar";
import { SidebarInset } from "./sidebar-inset";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarMenuButton } from "./sidebar-menu-button";
import { SidebarMenuItem } from "./sidebar-menu-item";
import { SidebarProvider } from "./sidebar-provider";
import { SidebarTrigger } from "./sidebar-trigger";

const meta = {
  title: "Components/Sidebar",
  component: SidebarProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SidebarProvider>
      <Sidebar>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>Home</SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>Settings</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <span className="text-sm font-medium">Dashboard</span>
        </header>
        <main className="flex-1 p-4">Main content</main>
      </SidebarInset>
    </SidebarProvider>
  ),
};
