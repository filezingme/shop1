import React, {useEffect} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


function GoogleRecaptcha({handleVerifyRecaptchaCallback, forwardedCaptchaRef}) {

    //google's test site key "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    //https://developers.google.com/recaptcha/docs/faq
    //passing-useRef: https://github.com/wrongakram/passing-useRef/blob/master/src/components/child.js

    let siteKey = "6Lf1R2ghAAAAAG0AeeNNXyvh5ibCD7cu_xCofDqZ" //ihaywa site key

    const LOCAL_DOMAINS = ["localhost", "127.0.0.1"];

    if (LOCAL_DOMAINS.includes(window.location.hostname))
        siteKey = "6LfsTmghAAAAAI1T9yM8PJqZlZTFAn9Uaiz0lycU" //local site key


    useEffect(() => {
        //console.log(forwardedCaptchaRef.current, 'Child Component')
    }, [])

    

    return (
        <ReCAPTCHA 
            sitekey={siteKey} 
            // data-theme='dark'
            onChange={handleVerifyRecaptchaCallback}
            ref={forwardedCaptchaRef}
            size="normal" //["compact","normal","invisible"] > default = normal
        />
    );
}

export default GoogleRecaptcha