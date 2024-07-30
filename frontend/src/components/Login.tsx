import PrimaryButton from "./buttons/PrimaryButton";

export default function Login() {
    return <div className="">
        <div className="flex justify-center">
            <div className="welcome text-3xl max-w-3xl">
                Welcome to Decentralized voting application
            </div>
        </div>
        <div className="flex justify-center">
            <div className="max-w--2xl">
                <PrimaryButton onClick={() => {}}> Connect your metamask</PrimaryButton>
            </div>
        </div>
    </div>
}