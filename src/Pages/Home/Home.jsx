import BreakingNews from "./BreakingNews";
import Header from "./Shared/Header/Header";
import LeftSideBar from "./Shared/LeftSideBar/LeftSideBar";
import NavBar from "./Shared/NavBar/NavBar";
import RightSideBar from "./Shared/RightSideBar/RightSideBar";

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="md:col-span-2 border">Coming Soon......</div>
                <div className="border">
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Home;