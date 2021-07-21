import { Component } from "react";
import { useUser } from '@auth0/nextjs-auth0';
import Link from "next/link";
import { useRouter } from "next/router";



function WithAuth(ChildComponent) {
    const ComposedComponent = (props) => {
        const { user } = useUser();
        if(!user) {
            return <div><p>Not logged in</p> <br /> <Link href={`/api/auth/login`}><a>Log in</a></Link></div>
        }
        return (
            <div>
                <ChildComponent />
            </div>
        )
    }

    return ComposedComponent;
}

export default WithAuth;