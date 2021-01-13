import './styles.scss';

export default function Status(props) {

    const {
        status
    } = props;


    if (status === 404) {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
        )
    }
    return (
        <>
        </>
    )
}