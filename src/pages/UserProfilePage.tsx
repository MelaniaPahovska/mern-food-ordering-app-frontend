import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-forms/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpadteLoading } = useUpdateMyUser();
  if (isGetLoading) {
    <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Unable to load user ptofile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpadteLoading}
    />
  );
};

export default UserProfilePage;
