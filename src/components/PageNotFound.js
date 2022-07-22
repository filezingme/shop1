import React, {useEffect} from 'react'

// return (render) > useEffect > return (unmounts)

function PageNotFound({showCopyright}) {    

    useEffect(() => {
        return (e) => { //unmounts
            showCopyright(false)
        };
      }, []);

    return (<>
        <div style={{textAlign: 'center'}}>
            <h1>:(</h1>
            <h1>There's nothing here!</h1>
        </div></>
    )
}

export default PageNotFound