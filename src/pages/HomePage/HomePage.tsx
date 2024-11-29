import {ChangeEvent, MouseEvent, useEffect, useState} from "react";
import {CarTypeResponse} from "../../api/libs/CarTypeService.ts";
import Header from "../../components/Header/Header.tsx";
import getAllCarTypes from "../../api/getAllCarTypes.ts";
import getAllCars from "../../api/getAllCars.ts";
import {CarResponse} from "../../api/libs/CarService.ts";
import getAllCarStatusTypes from "../../api/getAllCarStatusTypes.ts";
import addNewCarStatusEvent from "../../api/addNewCarStatusEvent.ts";
import getAllCarStatusEventsByCarId from "../../api/getAllCarStatusEventsByCarId.ts";
import {CarStatusEventsResponse} from "../../api/libs/CarStatusEventsService.ts";


export default function HomePage() {
    const [carResponseList, setCarResponseList] = useState<CarResponse[]>([]);
    const [carFilteredList, setCarFilteredList] = useState<CarResponse[]>([]);

    const [carStatusTypeResponseList, setCarStatusTypeResponseList] = useState<CarTypeResponse[]>([]);
    const [carTypeResponseList, setCarTypeResponseList] = useState<CarTypeResponse[]>([]);

    const [carStatusEvents, setCarStatusEvents] = useState<CarStatusEventsResponse[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            const cars = await getAllCars();
            setCarResponseList(cars)

            const carTypes = await getAllCarTypes();
            setCarTypeResponseList(carTypes)

            const carStatusTypes = await getAllCarStatusTypes();
            setCarStatusTypeResponseList(carStatusTypes)

            const carTypeSelect = document.getElementById("carTypeSelect") as HTMLSelectElement;
            setCarFilteredList(
                cars.filter((item) => item.carTypeId == BigInt(carTypeSelect.value))
            )
        }

        fetchCars().then();
    }, []);

    const saveButtonOnClickHandle = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const carSelectModal = document.getElementById("carSelectModal") as HTMLSelectElement;
        const carStatusTypeSelectModal = document.getElementById("carStatusTypeSelectModal") as HTMLSelectElement;

        await addNewCarStatusEvent(
            {
                carId: BigInt(carSelectModal?.value),
                statusTypeId: BigInt(carStatusTypeSelectModal?.value)
            }
        )
    }

    const loadEventsOnClickHandle = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const carSelect = document.getElementById("carSelect") as HTMLSelectElement;
        const carStatusEvents= await getAllCarStatusEventsByCarId({carId: BigInt(carSelect.value)})

        console.log(carStatusEvents)

        setCarStatusEvents(carStatusEvents)
    }

    const carTypeSelectOnChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()

        const carTypeSelect = document.getElementById("carTypeSelect") as HTMLSelectElement;
        setCarFilteredList(
            carResponseList.filter((item) => item.carTypeId == BigInt(carTypeSelect.value))
        )
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Header selectedIndex={0}/>
            <div className="d-flex flex-row h-100">
                <div className="d-flex flex-column w-75">
                    <div className="overflow-y-scroll m-3">
                        <table className="table table-bordered table-striped table-hover">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Название статуса</th>
                                <th scope="col">Время регистрации статуса</th>
                                <th scope="col">Активное время статуса</th>
                            </tr>
                            </thead>
                            <tbody>
                            {carStatusEvents.map(
                                (item, index) => (
                                    <tr data-key={item.id} key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.statusValue}</td>
                                        <td>{item.timeOfRegistration}</td>
                                        <td>{item.activeStatusSeconds.toString()} Секунд</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="d-flex flex-column w-25" style={{backgroundColor: "lightgray"}}>
                    <div className="mt-3 mx-3">
                        <button type="button" className="btn btn-primary w-100"
                            data-bs-toggle="modal" data-bs-target="#addNewCarStatusModal">
                            Добавить новое событие
                        </button>
                    </div>
                    <div className="mx-3">
                        <label className="form-label mt-2"
                               htmlFor="carTypeSelect">
                            Выберете тип машины
                        </label>
                        <select className="form-select" id="carTypeSelect" onChange={carTypeSelectOnChangeHandler}>
                            {carTypeResponseList.map((item) => (
                                <option value={Number(item.id)} key={Number(item.id)}>{item.value}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mx-3">
                        <label className="form-label mt-2"
                               htmlFor="carSelect">
                            Выберете автомобиль
                        </label>
                        <select className="form-select" id="carSelect">
                            {carFilteredList.map((item) => (
                                <option value={Number(item.id)} key={Number(item.id)}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-3 mx-3">
                        <button type="button" className="btn btn-success w-100"
                                onClick={loadEventsOnClickHandle}>
                            Загрузить события для автомобиля
                        </button>
                    </div>
                    <div className="modal fade" id="addNewCarStatusModal" aria-labelledby="addNewCarStatusModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addNewCarStatusModalLabel">
                                        Добавление нового события
                                    </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"/>
                                </div>
                                <div className="modal-body">
                                    <div className="mx-3">
                                        <label className="form-label mt-2"
                                               htmlFor="carSelectModal">
                                            Выберете автомобиль
                                        </label>
                                        <select className="form-select" id="carSelectModal">
                                            {carResponseList.map((item) => (
                                                <option value={Number(item.id)} key={Number(item.id)}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mx-3">
                                        <label className="form-label mt-2"
                                               htmlFor="carStatusTypeSelectModal">
                                            Выберете тип события
                                        </label>
                                        <select className="form-select" id="carStatusTypeSelectModal">
                                            {carStatusTypeResponseList.map((item) => (
                                                <option value={Number(item.id)} key={Number(item.id)}>
                                                    {item.value}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-bs-dismiss="modal"
                                        onClick={saveButtonOnClickHandle}>
                                        Сохранить
                                    </button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
