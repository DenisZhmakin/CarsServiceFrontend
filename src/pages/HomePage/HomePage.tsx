import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../../components/Header/Header.tsx";

export default function HomePage() {

    return (
        <div className="vw-100 vh-100">
            <Header selectedIndex={0}/>
        </div>
    )
}
