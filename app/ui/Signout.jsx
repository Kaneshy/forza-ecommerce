import { signOut } from '@/auth';

const Signout = () => {
    return (

        <button onClick={() => signOut()} className="hidden md:block">Sign Out</button>
    )
}

export default Signout