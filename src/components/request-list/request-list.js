import './request-list.scss';

import RequestListItem from '../request-list-item';

const RequestList = ({requests, onDelete}) => {

    const elements = requests.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <RequestListItem 
                {...itemProps}
                onDelete={() => onDelete(id)}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default RequestList;