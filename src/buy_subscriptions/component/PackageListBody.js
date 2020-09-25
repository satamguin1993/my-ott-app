import React from 'react';
import {TBody} from "@react/react-spectrum/Table";

class PackageListBody extends React.Component {

    render() {
        return (
            <TBody>
                {this.props.packageList.map((row, idx) => <PackageListRow row={row} idx={idx} key={'ReportsTableRow'+idx}/>)}
            </TBody>
        );
    }
}

export default PackageListBody;