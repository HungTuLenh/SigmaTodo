import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: 'SigmaTodo',
        master: 'HungTuLenh',
    };

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnClickAddTodo = () => {
        alert('Thêm thành công');
    };

    render() {
        return (
            <>
                <div className="1">Tên tôi là: {this.state.name}</div>
                <div className="2">
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                </div>
                <div className="3">Được tạo ra bởi {this.state.master}</div>
                <div className="4">
                    <button onClick={() => this.handleOnClickAddTodo()}>
                        Thêm việc cần làm
                    </button>
                </div>
            </>
        );
    }
}

export default MyComponent;
