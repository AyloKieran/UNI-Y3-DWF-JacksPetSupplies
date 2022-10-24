function Footer() {
    return (
        <footer className="flex flex-col text-sm">
            <div className="bg-jack p-8 flex flex-col text-white text-center gap-2">
                <h3 className="text-lg font-bold mx-auto">Need help? ☎️</h3>
                <p className="text-sm">
                    Give us a call on <a href="#" className="font-semibold hover:underline">0121 506 4856</a> or e-mail us at <a href="#" className="font-semibold hover:underline">help@jacks.co.uk</a>
                </p>
            </div>
            <div className="flex flex-col text-gray-600 dark:text-gray-400 text-center p-4 gap-2">
                <p>Copyright ©️ 2022 - Jack's Pet Supplies</p>
                <p className="text-xs">
                    <a href="#" className="hover:underline">Terms</a> | <a href="#" className="hover:underline">Privacy</a> | <a href="#" className="hover:underline">Accessibility</a></p>
            </div>
        </footer>
    )
}

export default Footer