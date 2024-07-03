import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <div className="">
            <Head title="Welcome" />

            <div className="">
                <nav class="bg-black border-gray-200 dark:bg-gray-900 md:px-40 fixed w-full">
                    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                        <a
                            href="/"
                            class="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <img
                                src="/images/logo/logo36-light.png"
                                class="h-8"
                                alt="Task Guardian Logo Logo"
                            />
                            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                                TaskGuardian
                            </span>
                        </a>
                        <div class="flex items-center space-x-6 rtl:space-x-reverse">
                            <Link
                                href={route("login")}
                                class="text-sm  text-white dark:text-white hover:text-gray-500 font-semibold "
                            >
                                <i class="bi bi-person"></i> Sign In
                            </Link>
                            <Link
                                href={route("register")}
                                class="text-sm  text-white dark:text-blue-500 hover:text-gray-500 font-semibold bg-green-500 px-3 py-1 rounded-md"
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </nav>

                    <section className="bg-purple-600 flex flex-col md:flex-row text-white min-h-screen px-5 py-20 md:py-6 md:justify-between md:px-40 items-center ">
                        <div className="mb-5 max-w-md">
                            <p className="sm:text-4xl mb-5 text-3xl ">
                                Take Control of Your Tasks with TaskGuardian
                            </p>
                            <div className="mb-10">
                                <span>
                                    Your ultimate task management solution for
                                    staying organized, productive, and on top of
                                    your game.
                                </span>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="font-semibold bg-green-500 px-8 py-3 rounded-md hover:text-gray-500 "
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/images/logo/task-logo-medium.png"
                                className="max-w-72"
                                alt=""
                            />
                        </div>
                    </section>


                </div>
            </div>

    );
}
