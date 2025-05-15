import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css"

const HomeLayout = ({ children, }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className="bg-rosepine-bg">
                <div className="min-h-screen bg-rosepine-bg flex flex-col">
                    <NavBar />
                    <div className="flex-1">
                        {children}
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default HomeLayout;
