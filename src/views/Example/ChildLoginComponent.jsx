import React from 'react';

class ChildLoginComponent extends React.Component {
    render() {
        let { username, password, arrUser } = this.props;
        return (
            <>
                <div>
                    {username} - {password},
                    {arrUser.map((user, id) => {
                        return <div key={user.userid}>{user.username}</div>;
                    })}
                </div>
            </>
        );
    }
}

export default ChildLoginComponent;
