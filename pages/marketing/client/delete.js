// import node module libraries
import { useRouter } from "next/router";

// // import profile layout wrapper
// import ProfileLayoutWrap from "layouts/marketing/ProfileLayoutWrap";
// import profile layout wrapper
import ClientProfileLayout from "layouts/marketing/client/ClientProfileLayout";

// import widget/custom components
import { ACDeleteProfilePage, GeeksSEO } from "widgets";

const DeleteProfile = () => {
  const location = useRouter();
  return (
    <ClientProfileLayout pathpara={location.pathname}>
      <GeeksSEO title=" Client Delete Profile" />
      <ACDeleteProfilePage />
    </ClientProfileLayout>
  );
};

export default DeleteProfile;
