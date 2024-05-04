import Category from "./Category/Category";
import SideBar from "./SideBar/SideBar";

export default function Home() {
    return (
        <div className="main-section">
            <SideBar/>
            <Category/>
        </div>
    );
}