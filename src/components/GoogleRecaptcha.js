import React, {useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


function GoogleRecaptcha({handleVerifyRecaptchaCallback, forwardedCaptchaRef}) {

    useEffect(() => {
        console.log(forwardedCaptchaRef.current, 'Child Component')
    }, [])

    

    return (
        <ReCAPTCHA 
            sitekey='6Lf1R2ghAAAAAG0AeeNNXyvh5ibCD7cu_xCofDqZ' //local test: 6LfsTmghAAAAAI1T9yM8PJqZlZTFAn9Uaiz0lycU
            // data-theme='dark'
            onChange={handleVerifyRecaptchaCallback}
            ref={forwardedCaptchaRef}
            size="normal" //["compact","normal","invisible"] > default = normal
        />
    );
}

export default GoogleRecaptcha