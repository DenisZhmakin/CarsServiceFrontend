import React, {useEffect, useState} from "react";
import getAllCarTypes from "../../api/getAllCarTypes.ts";
import {CarTypeResponse} from "../../api/libs/CarTypeService.ts";
import Header from "../../components/Header/Header.tsx";


import 'bootstrap/dist/js/bootstrap.esm.min.js';
import addNewCarType from "../../api/addNewCarType.ts";

export default function CarTypesPage() {
    const [inputValue, setInputValue] = useState<string>("");
    const [carTypeResponseList, setCarTypeResponseList] = useState<CarTypeResponse[]>([]);

    useEffect(() => {
        const fetchCarTypes = async () => {
            const carTypes = await getAllCarTypes();
            setCarTypeResponseList(carTypes)
        }
        fetchCarTypes().then();
    }, [])

    const saveButtonOnClickHandle = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (inputValue === "") {
            return;
        }

        await addNewCarType({value: inputValue})
        setCarTypeResponseList([])

        const carTypes = await getAllCarTypes()
        setCarTypeResponseList(carTypes)
        setInputValue("")
    };

    return (
        <div className="d-flex flex-column vh-100">
            <Header selectedIndex={3}/>
            <div className="ms-3 mt-3">
                <button type="button" className="btn btn-success w-25" data-bs-toggle="modal"
                        data-bs-target="#addNewCarTypeModal">
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
            <div className="modal fade" id="addNewCarTypeModal" aria-labelledby="addNewCarTypeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addNewCarTypeModalLabel">Добавление нового типа машины</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="mx-1">
                                <label className="form-label"
                                       htmlFor="carTypeValueInput">
                                    Значение нового типа машины
                                </label>
                                <input type="text"
                                       value={inputValue}
                                       onChange={(e) => setInputValue(e.target.value)}
                                       className="form-control"
                                       id="carTypeValueInput"
                                       placeholder="Вводите:"
                                />
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
    )
}