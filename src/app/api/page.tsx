
import { X } from "lucide-react";
export default function Page() {
    return (
        <main className="w-full h-[100vh] bg-[#141414] flex-col flex justify-center items-center text-2xl">
            <X className="text-red-500" size={64} />
            <a className="text-red-500" href="/">
                This is the API page, you should not be here.
            </a>
        </main>
    );
}