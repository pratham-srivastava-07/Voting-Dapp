export default function PrimaryButton({children, onClick}: {children: string, onClick: () => void}) {
    return <div onClick={onClick}>
        {children}
    </div>
}

