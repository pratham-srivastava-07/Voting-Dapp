
export default function Connected(props:any) {
    return <div className="container pt-20">
         <div className="flex justify-center">
            <div className="welcome text-3xl max-w-3xl">
                You are now connected to metamask now
            </div>
        </div>
        <div className="flex justify-center text-black pt-10">
         Metamask account: {props.account}
        </div>
    </div>
}