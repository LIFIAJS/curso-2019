const Person = props => (
    <div>
        { props.name } { props.surname }
    </div>
)

const Profile = () => (
    <Person name='Tincho' surname='Brecito' />
)