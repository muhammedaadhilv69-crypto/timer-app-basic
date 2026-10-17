export default function Button({ children, onClick, disabled }: { children: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-500 disabled:hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}