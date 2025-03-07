import { getAllUsers } from "@/actions/user";
import NotAllowed from "@/components/not-allowed";
import { getSession } from "@/lib/getSession";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function Dashboard() {
  const session = await getSession();
  if (session?.user.role !== "ADMIN") {
    return <NotAllowed />;
  }
  const usersData = await getAllUsers();

  return (
    <div className="w-full min-h-[35rem] flex justify-center items-center ">
      <div className="w-[35rem]">
        <Table className="border">
          {usersData.data ? (
            <>
              <TableCaption>A list of all the users</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead className="text-right">Created At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {usersData.data.map((user) => (
                  <TableRow className="capitalize" key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell className="lowercase">{user.email}</TableCell>
                    <TableCell className="text-right">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          ) : (
            <TableCaption>{usersData.error}</TableCaption>
          )}
        </Table>
      </div>
    </div>
  );
}
