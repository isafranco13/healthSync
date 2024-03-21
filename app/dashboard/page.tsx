import { Footer, NavbarSignOut } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession();
    if (!session) {
      redirect("/signin");
    }

    return (
        <>
            <NavbarSignOut />
            <main>
                <br /><br /><br /><br /><br />
                <div className=" text-center text-4xl font-bold">¡Estás dentro!</div>
            </main>
            <Footer />
        </>
    );
};

export default Dashboard;