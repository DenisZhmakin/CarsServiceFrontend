import React, {useEffect, useState} from "react";
import {CarResponse} from "../../api/libs/CarService.ts";
import {CarTypeResponse} from "../../api/libs/CarTypeService.ts";
import getAllCarTypes from "../../api/getAllCarTypes.ts";
import getAllCars from "../../api/getAllCars.ts";
import addNewCar from "../../api/addNewCar.ts";
import Header from "../../components/Header/Header.tsx";
import 'bootstrap/dist/js/bootstrap.esm.min.js';


export default function CarListPage() {
    const [inputValue, setInputValue] = useState<string>("");
    const [carResponseList, setCarResponseList] = useState<CarResponse[]>([]);
    const [carTypeResponseList, setCarTypeResponseList] = useState<CarTypeResponse[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            const cars = await getAllCars();
            setCarResponseList(cars)

            const carTypes = await getAllCarTypes();
            setCarTypeResponseList(carTypes)
        }

        fetchCars().then();
    }, []);
    
    const saveButtonOnClickHandle = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (inputValue === "") {
            return;
        }

        const carValueSelect = document.getElementById("carValueSelect") as HTMLSelectElement;
        await addNewCar({name: inputValue, carTypeId: BigInt(carValueSelect?.value)})
        setCarResponseList([])

        const cars = await getAllCars();
        setCarResponseList(cars)
        setInputValue("")
    }

    return (
        <div className="d-flex flex-column vh-100">
            <Header selectedIndex={1}/>
            <div className="ms-3 mt-3">
                <button type="button" className="btn btn-success w-25"
                    data-bs-toggle="modal" data-bs-target="#addNewCarModal">
                    Добавить новый автомобиль
                </button>
            </div>
            <div className="overflow-y-scroll m-3">
                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Название автомобиля</th>
                        <th scope="col">Тип автомобиля</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carResponseList.map(
                        (item, index) => (
                            <tr data-key={item.id} key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.carTypeValue}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="addNewCarModal" aria-labelledby="addNewCarModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addNewCarModalLabel">
                                Добавление нового автомобиля
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <div className="mx-1">
                                <label className="form-label"
                                       htmlFor="carValueInput">
                                    Название машины
                                </label>
                                <input type="text"
                                       value={inputValue}
                                       onChange={(e) => setInputValue(e.target.value)}
                                       className="form-control"
                                       id="carValueInput"
                                       placeholder="Вводите:"
                                />
                                <label className="form-label mt-2"
                                       htmlFor="carValueSelect">
                                    Выберете тип машины
                                </label>
                                <select className="form-select" id="carValueSelect">
                                    {carTypeResponseList.map((item) => (
                                        <option value={Number(item.id)}>{item.value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                                    onClick={saveButtonOnClickHandle}>
                                Сохранить
                            </button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                                    onClick={() => {
                                        setInputValue("")
                                    }}>
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}