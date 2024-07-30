export default function PrimaryButton({children, onClick}: {children: string, onClick: () => void}) {
    return <button className="border bg-slate-300 rounded-full p-3" onClick={onClick}>
        {children}
    </button>
}

