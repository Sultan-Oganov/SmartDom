import React from 'react'
import './Notes.css'

const Notes = () => {

    const times = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00',]
    const tasks = ['Уборка в доме Айданы', 'Сделать уроки с Данилом', 'Успеть переполоть грядки в огороде Марии']

    return (
        <>

            <div className="notes__title">Daily Tasks</div>

            <div className="notes__content">

                <div className="notes__times">

                    {
                        times.map((el, i) => {
                            return (
                                el >= 12 || el == 0 ? <div key={i} className="notes__time notes__time_empty">{`${el}:00`}</div>
                                    : <div className="notes__item">
                                        <div key={i} className="notes__time">{`${el}:00`}</div>

                                        {i <= 2 ? <div key={i} className="notes__descr">{tasks[i]}</div> : null}
                                    </div>
                            )
                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Notes