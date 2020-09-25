import React from 'react';
import {TBody} from "@react/react-spectrum/Table";
import InventoryListRow from './InventoryListRow';

class InventoryListBody extends React.Component {

    render() {
        return (
            <TBody>
                {this.props.inventoryList.map((row, idx) => <InventoryListRow row={row} idx={idx} key={'ReportsTableRow'+idx}/>)}
            </TBody>
        );
    }
}

export default InventoryListBody;