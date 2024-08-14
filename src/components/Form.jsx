import './form.css'
export default function Form() {
    return (
        <>
            <form className={"main-form"}>
                <div className={"form-header"}>
                    <div className={'header-logo'}>
                     <span id={'logo-circle'}>
                    <img src="/logo.png"  alt={'logo'}/>
                     </span>
                    </div>

                    <div>
                    <h1>BITS <span id={'green-text'}>STUDENT INFORMATION MANAGEMENT</span> SYSTEM</h1>
                    </div>
                </div>
                <div className={'input-bar'}>
                    <div className={'make-flex'}>
                        <input name={'Email'} placeholder={"Email"}/>
                        <span className={'adj-logos'}>
                            <img src="/mail.png" className={'input-logos'} alt={'mail icon'}/>
                        </span>
                    </div>
                    <div className={'make-flex'}>
                        <input name={'Password'} placeholder={"Password"}/>
                        <span className={'adj-logos'}>
                            <img src="/key.png" className={'input-logos'} alt={'mail icon'}/>
                        </span>
                    </div>
                </div>
                <button type={"submit"} className={'login-btn btn'}>Login</button>
                <button type={"submit"} className={'help-support-btn btn'}>Help & Support</button>
            </form>

        </>
    )
}