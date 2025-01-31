

export default function NotFound() {
    return (
        <main className="flex items-center justify-center py-72">
            <div className="flex flex-col items-center justify-center gap-2 relative">
                <div className="text-6xl">
                    <span>Error</span> <span className="body text-violet-600 font-bold">404</span>
                </div>
                <span className="text-4xl">Page not found</span>
            </div>
        </main>
    )
}