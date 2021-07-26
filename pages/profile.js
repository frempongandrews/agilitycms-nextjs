import Image from "next/image";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import CustomLayout from "../components/common/custom/CustomLayout";
import characterImages from "../helpers/characterImages";

const ProfilePage = ({user}) => {
    const renderProfile = () => {
        return (
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <Image className="object-cover w-full h-56"
                       src={user.picture || characterImages["no-image"]}
                       alt="avatar" width={400} height={300} />

                <div className="py-5 text-center">
                    <a href="#" className="block text-2xl font-bold text-gray-800 dark:text-white">{user.nickname || "No nickname"}</a>
                    <span className="text-sm text-gray-700 dark:text-gray-200">Email: {user.email}</span>
                </div>
            </div>
        )
    }
    return (
        <CustomLayout>

            {renderProfile()}
        </CustomLayout>
    )
}

export const getServerSideProps = withPageAuthRequired();

export default ProfilePage;