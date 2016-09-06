import react, { PropTypes } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { initState } from './reducer'

class table extends Component {
    render() {
        let player = Object.keys(initState.players).map((id) => {
            return (
                 <Table>
                    <thead>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Knowname</th>
                        <th>Shirt Number</th>
                        <th>Role</th>
                    </thead>
                    <tbody>
                        <td>{initState.players[id].name}</td>
                        <td>{initState.players[id].surname}</td>
                        <td>{initState.players[id].knowname}</td>
                        <td>{initState.players[id].shirtNumb}</td>
                        <td>{initState.players[id].role}</td>
                    </tbody>
                </Table>

            )
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
            <div></div>
        )
    }
}