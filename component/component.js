import react, { PropTypes } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import Reducer from './reducer'

class table extends Component {
    render() {
        let player = Object.keys(initState.players).map((id) => {
            return (
                <tr key={key}>
                    <td>{initState.players[id].name}</td>
                    <td>{initState.players[id].surname}</td>
                    <td>{initState.players[id].knowname}</td>
                    <td>{initState.players[id].shirtNumb}</td>
                    <td>{initState.players[id].role}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-info btn-xs"
                            onClick={this.editPlayer.bind(this, player.id)}
                            >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger btn-xs"
                            onClick={this.deletePlayer.bind(this, player.id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })
        return (
            <div className="player-list">
                <div className="container">
                    <h2>Player List</h2>
                         <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Knowname</th>
                                    <th>Shirt Number</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players}
                            </tbody>
                        </Table>
                </div>
            </div>
        )
    }
    deletePlayer(id) {
        store.dispatch({
            type: 'REMOVE_PLAYER',
            id
        })
    }
}

class form extends Component {
    render() {
        let shirtNumber = this.props.data.menu.shirtNumber
        let role = this.props.data.menu.role

        let playerNumber = shirNumber.map((number, key) => {
            return <option key={key} value={number}>{number}</option>
        })

        let playerRole = role.map((role, key) => {
            return <option key={key} value={role}>{role}</option>
        })

        return (
            <div className="player-form">
                <div className="container">
                    <form 
                        className="form-horizontal"
                        onSubmit={this.addingPlayer.bind(this)}>
                            <h2>Insert the Player</h2>
                            <hr />

                            <div className="form-group">
                                <label className="col-sm-2 control-label">First Name</label>
                                <div className="col-sm-10">
                                    <input
                                        required
                                        className="form-control"
                                        ref='name'
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 control-label">Last Name</label>
                                <div className="form-group">
                                    <input
                                        required
                                        className="form-control"
                                        ref="surname"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 control-label">Know name</label>
                                <div className="col-sm-10">
                                    <input
                                        required
                                        className="form-control"
                                        ref="knowname"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 control-label">Shirt Number</label>
                                <div className="col-sm-10">
                                    <select
                                        required
                                        className="form-control"
                                        ref="shirtNumb"
                                        name="shirtNumber">
                                        <option defaultValue=''>Please Select the Shirt Number</option>
                                        {playerNumber}
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 control-label">Role</label>
                                <div className="col-sm-10">
                                    <select
                                        required
                                        className="form-control"
                                        ref="role"
                                        name="role">
                                        <option defaultValue=''>Please Select a Role</option>
                                        {playerRole}
                                    </select>
                                </div>
                            </div>
                            <input className="btn btn-succes" type="submit" value="Insert The Player" />
                        </form>
                </div>
            </div>
        )
    }
    addingPlayer(e) {
        e.preventDefault()
        let newPlayer = {
            id: this.props.data.players.lenght + 1,
            name: this.refs.name.value,
            surname: this.refs.surname.value,
            knowname: this.refs.knowname.value,
            shirtNumb: this.refs.shirtNumb.value,
            role: this.refs.role.value
        }
        store.dispatch({
            type: 'ADD_PLAYER',
            newPlayer
        })
        this.refs.name.value = '',
        this.refs.surname.value = '',
        this.refs.knowname.value = '',
        this.refs.shirtNumb.value = 'Please Select the Shirt Number',
        this.refs.role.value = 'Please Select a Role'
    }

}