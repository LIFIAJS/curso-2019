class Person extends Component {
    render() {
        const { name, surname } = this.props

        return (
            <div>
                { name } { surname }
            </div>
        )
    }
}

const Profile = () => <Person name='Tincho' surname='Brecito' />
