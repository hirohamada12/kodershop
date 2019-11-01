import React, {Component} from 'react'
import './style.css'

class NotFound extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <a  href="#">Quay về trang chủ</a>
                </div>
            </div>
        )
    }
}

export default NotFound
