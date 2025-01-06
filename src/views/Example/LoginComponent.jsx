import React from 'react';
import ChildLoginComponent from './ChildLoginComponent';
import { use } from 'react';
class LoginComponent extends React.Component {
    state = {
        username: 'HungTuLenh',
        password: 'gitcommit',
        arrUser: [
            { userid: 1, username: 'hungtulenh' },
            { userid: 2, username: 'hungnd' },
        ],
    };

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value,
        });
    };
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        });
    };

    handleLogin = (event) => {
        event.preventDefault();
        alert(`${this.state.username} \n ${this.state.password}`);
    };

    render() {
        return (
            <>
                <form>
                    <label htmlFor="username">Tài khoản:</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={(event) => this.handleOnChangeUsername(event)}
                    />

                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={(event) => this.handleOnChangePassword(event)}
                    />

                    <button
                        type="submit"
                        onClick={(event) => this.handleLogin(event)}
                    >
                        Đăng Nhập
                    </button>
                </form>
                <ChildLoginComponent
                    username={this.state.username}
                    password={this.state.password}
                    arrUser={this.state.arrUser}
                />
            </>
        );
    }
}

export default LoginComponent;
