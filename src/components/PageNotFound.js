import React, {useEffect} from 'react'

// return (render) > useEffect > return (unmounts)

function PageNotFound({handleShowCopyright}) {    

    console.log('PageNotFound component')

    useEffect(() => {

        console.log('PageNotFound useEffect')
        handleShowCopyright(false)

        return (e) => { //unmounts
            console.log('PageNotFound unmounts')
            //showCopyright(false)
        };

      }, []);

    return (<>
        <div className='PageNotFound'>
            <h1>Page Not Found</h1>
            <h5>There's nothing here :(</h5>
        </div></>
    )
}

export default PageNotFound