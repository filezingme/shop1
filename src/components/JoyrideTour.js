import React, {useState, useEffect} from 'react'
import Joyride, { STATUS } from "react-joyride";
import axios from 'axios';

{/* Joyride: https://docs.react-joyride.com/ */}

const TOURDONE_KEY = "tourDone"

function JoyrideTour() {       

	const [data, setData] = useState([])


	useEffect(() => {

		fetchData();

	}, [])


    async function fetchData() {
		const { data } = await axios.get(process.env.PUBLIC_URL+'/data/joyrideTour.json')

		//set data
		setData(data)
	}

    /* JOYRIDE_STEPS example
    const JOYRIDE_STEPS = [
      {
        target: "#home-ontop",
        placement: 'left-start',
        title: 'Trang chủ',
        content: "Click để về trang chủ!",
        disableBeacon: true, //tự động open step này khi onload site
        "event": "hover",
        styles: {
          options: {
        	width: 300,
          }
        },
        content: (
        	<div>
        		You can render anything here.
        	</div>
        )
      }
    ];
    */

	const [showTour, setShowTour] = useState(true);

	const handleTourCallback = ({ status }) => {
        if (!localStorage.getItem(TOURDONE_KEY)) { // nếu chưa tồn tại localStorage  cho tourDone

            if ([STATUS.SKIPPED, STATUS.FINISHED].includes(status)) { //nếu bấm Bỏ qua hoặc Finish
                setShowTour(false)
                localStorage.setItem(TOURDONE_KEY, true)
            }
        }
        else {
            setShowTour(false)
        }
	};


    return (
        <Joyride
            continuous
            run={showTour}
            steps={data}
            scrollToFirstStep
            showProgress
            showSkipButton
            //hideBackButton
            hideCloseButton
            callback={handleTourCallback}
            styles={{
                options: {
                    zIndex: 10000,
                },
            }}
            locale={{ 
                back: 'Trước', 
                close: 'Đóng', 
                last: 'Kết thúc', 
                next: 'Tiếp', 
                open: 'Mở hộp thoại', 
                skip: 'Bỏ qua' 
            }}
        />
    )
}

export default JoyrideTour