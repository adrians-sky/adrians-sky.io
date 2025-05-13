import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css"

const HomeLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen bg-rosepine-bg">
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default HomeLayout;
