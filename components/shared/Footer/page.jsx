import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( 
    <footer className="text-xs border-t w-full">
        <div className="lg:mx-auto p-5 md:px-10 w-full flex justify-center items-center">
            {currentYear} &copy; {APP_NAME}. All rights reserved.
        </div>
    </footer>
);
}
 
export default Footer;