import React from 'react'

function Contact({ siteInfo }) {

    return (siteInfo && (
        <section id="contact">
            <header>
                <h2>Liên hệ</h2>
                <h3>Điện Thoại: {siteInfo.phone}</h3>
                <p>Email: {siteInfo.email}</p>
            </header>
            <div className="content">

                <div dangerouslySetInnerHTML={ {__html: siteInfo.description} } />

                <form>
                    <div className="fields">
                        <div className="field half">
                            <input type="text" name="name" id="name" placeholder="Tên" />
                        </div>
                        <div className="field half">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <textarea name="message" id="message" placeholder="Thông tin liên hệ" rows="7"></textarea>
                        </div>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Gửi" className="button primary" /></li>
                    </ul>
                </form>
            </div>
            <footer>
                <ul className="items">
                    <li>
                        <ul className="icons">
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                            <li><a href={process.env.PUBLIC_URL + "#"} className="icon brands fa-codepen"><span className="label">Codepen</span></a></li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </section>
    ))
}

export default Contact