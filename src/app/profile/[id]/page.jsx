export default function UserProfile({params}) {
    return <div className="grid place-items-center w-svw h-svh bg-black">
        <div className="flex flex-col justify-center items-center rounded-md shadow-[0_0_70px_rgba(255,255,255,0.5)] p-6 gap-4 bg-white">
            <h1 className="text-4xl">Profile</h1>
            <hr></hr>
            <p className="text-4xl">Profile page {params.id}</p>
        </div>
    </div>;
}