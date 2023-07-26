import Datepicker from "tailwind-datepicker-react"
import React,{useState} from 'react'


const Datepick = () => {
    const options = {
        title: "Calende",
        autoHide: true,
        todayBtn: false,
        clearBtn: true,
        maxDate: new Date("2024-01-01"),
        minDate: new Date("2022-01-01"),
        theme: {
            background: "bg-gray-700",
            todayBtn: "bg-white-500",
            clearBtn: "",
            icons: "",
            text: "",
            input: "",
            inputIcon: "",
            selected: "",
        },
        icons: {
          
            prev: () => <span>P</span>,
            next: () => <span>N</span>,
        },
        datepickerClassNames: "top-12",
        defaultDate: new Date("2023-07-25"),
        language: "en",
    }
	const [show, setShow] = useState (false)
	const handleChange = (selectedDate) => {
		console.log(selectedDate)
	}
	const handleClose = (state) => {
		setShow(state)
	}

	return (
		<div>
			<Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} />
		</div>
	)
}
export default Datepick