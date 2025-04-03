import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Key, MoreHorizontal, Search, Shield, Trash, UserPlus } from "lucide-react"

// Sample users data
const users = [
  {
    id: "USR001",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Admin",
    department: "IT",
    lastActive: "2023-10-15 09:45 AM",
    status: "Active",
  },
  {
    id: "USR002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "Inventory Manager",
    department: "Warehouse",
    lastActive: "2023-10-15 10:30 AM",
    status: "Active",
  },
  {
    id: "USR003",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    role: "Purchasing Agent",
    department: "Procurement",
    lastActive: "2023-10-14 03:15 PM",
    status: "Active",
  },
  {
    id: "USR004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Sales Representative",
    department: "Sales",
    lastActive: "2023-10-10 11:20 AM",
    status: "Inactive",
  },
  {
    id: "USR005",
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    role: "Warehouse Staff",
    department: "Warehouse",
    lastActive: "2023-10-15 08:05 AM",
    status: "Active",
  },
]

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">User Management</h1>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>System Users</CardTitle>
            <CardDescription>Manage user accounts, roles, and permissions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="w-full sm:w-[300px]" />
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${user.name.charAt(0)}`} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="font-medium">{user.name}</span>
                              <span className="text-sm text-muted-foreground">{user.email}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {user.role === "Admin" && <Shield className="h-4 w-4 text-primary" />}
                            {user.role}
                          </div>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Key className="mr-2 h-4 w-4" />
                                Reset Password
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                <Trash className="mr-2 h-4 w-4" />
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

