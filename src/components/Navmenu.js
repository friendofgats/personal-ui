const Navmenu = () => {
    return (
        <header className="bg-grey-400 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="http://localhost:3000/me" className="ml-3 text-xl">
                        Ethan Heyrman
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
                    <a href="http://localhost:3000/resume" className="mr-5 hover:text-white">
                        Things I'm good at
                    </a>
                    <a href="http://localhost:3000/hobbies" className="mr-5 hover:text-white">
                        What I'm up to
                    </a>
                    <a href="http://localhost:3000/contact" className="mr-5 hover:text-white">
                        Contact me
                    </a>
                </nav>
                <a
                    href="http://localhost:3000/site"
                    className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                    Site guts
                </a>
            </div>
        </header>
    );
}

export default Navmenu;