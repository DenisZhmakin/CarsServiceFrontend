import Header from "../../components/Header/Header.tsx";
import {useEffect, useState} from "react";
import getAllCarTypes from "../../api/getAllCarTypes.ts";
import {CarTypeResponse} from "../../api/libs/CarTypeService.ts";

export default function CarTypesPage() {
    // import addNewCarType from "./api/addNewCarType.ts";
    // addNewCarType({value: "Личный автомобиль"}).then(res => console.log(res));
    const [carTypeResponseList, setCarTypeResponseList] = useState<CarTypeResponse[]>([]);

    useEffect(() => {
        const fetchCarTypes = async () => {
            const carTypes = await getAllCarTypes();
            setCarTypeResponseList(carTypes.carTypes)
        }
        fetchCarTypes();
    }, [])

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
                    {carTypeResponseList.map(
                        (item, index) => (
                            <tr data-key={item.id} key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.value}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}