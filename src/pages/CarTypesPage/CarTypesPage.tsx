import Header from "../../components/Header/Header.tsx";

export default function CarTypesPage() {
    // import addNewCarType from "./api/addNewCarType.ts";
    // addNewCarType({value: "Личный автомобиль"}).then(res => console.log(res));

    return (
        <div className="d-flex flex-column vh-100">
            <Header selectedIndex={3}/>
            <div className="ms-3 mt-3">
                <button type="button" className="btn btn-success w-25">
                    Добавить новый тип машины
                </button>
            </div>
            <div className="overflow-y-scroll m-3">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Значение типа</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}