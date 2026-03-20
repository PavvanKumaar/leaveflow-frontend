export default function HeaderBar(){
    return (
        <div className = "flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome, Manager</h1>
            <button class="bg-white hover:bg-red-50 text-red-600 font-semibold py-2 px-4 border border-red-600 rounded shadow transition duration-200">
            Logout
            </button>
        </div>  
    )
}