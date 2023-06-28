
import { useQuery, useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { toast } from "react-hot-toast";

const makeUserAdmin = async (id, checked) => {
  const res = await fetch(`https://music-school-server-sahariarsupto.vercel.app/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role: checked ? "admin" : "Regular",
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to update user");
  }
};

const AllUsers = () => {
  const queryClient = new QueryClient();

  const fetchUsers = async () => {
    const res = await fetch("https://music-school-server-sahariarsupto.vercel.app/users");
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  };

  const { data: users = [], refetch, isLoading, error } = useQuery(["users"], fetchUsers, {
    queryFn: fetchUsers,
  });

  const mutation = useMutation(makeUserAdmin, {
    onSuccess: () => {
      refetch();
      toast.success("Admin Added Successfully");
    },
  });

  if (isLoading) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = (id) => {
    // Handle delete functionality
    console.log(`Delete user with ID: ${id}`);
  };

  const handleMakeAdmin = (id, checked) => {
    mutation.mutate(id, checked);
  };

  return (
<>
<Helmet>
    <title>Music School - Classes</title>
    </Helmet>
<div className="w-full ">
      <div className="overflow-x-auto text-center">
        <table className="table table-lg text-center">
          <thead>
            <tr className="text-xl">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.role === "admin" ? "admin" : "Regular"}</td>
                <td>
                  <input
                    type="checkbox"
                    className="toggle toggle-xl"
                    checked={user.role === "admin"}
                    onChange={(e) => handleMakeAdmin(user._id, e.target.checked)}
                  />
                </td>
                <td>
                  <button
                    className="bg-gradient-to-r from-red-500 to-indigo-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div></>
  );
};

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AllUsers />
    </QueryClientProvider>
  );
};

export default App;