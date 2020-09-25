import React from 'react';
import {TD, TR} from "@react/react-spectrum/Table";
import RadioGroup from "@react/react-spectrum/RadioGroup";
import Radio from "@react/react-spectrum/Radio";
import buyStore from "../store/buyStore";

class PackageListRow extends React.Component {

    handleStateChange = (evt, row) => {
        buyStore.fetchAllInventoriesByPackage(row.id);
    }

    render() {

        const row = this.props.row;
        return (
            <TR key={this.props.idx}>
                <TD divider key={this.props.idx + 'ID'}
                    className="manage-reports-table-datacell">{row.id}</TD>
                <TD divider key={this.props.idx + 'NAME'} className="manage-reports-table-datacell">{row.name}</TD>
                <TD divider key={this.props.idx + 'SEATS'}
                    className="manage-reports-table-datacell">{row.noOfSeats}</TD>
                <TD divider key={this.props.idx + 'BASIS'} className="manage-reports-table-datacell">{row.basis}</TD>
                <TD divider key={this.props.idx + 'PRICE'} className="manage-reports-table-datacell">{row.pricing}</TD>
                <TD divider key={this.props.idx + 'STATUS'} className="manage-reports-table-datacell">{row.status}</TD>
                <TD divider key={this.props.idx + 'SELECT'}>
                    <RadioGroup name="radio-group" onChange={e => this.handleStateChange(e, row)}>
                        <Radio label="Select" value={row.id} row={row}></Radio>
                    </RadioGroup>
                </TD>
            </TR>
        );
    }
}

export default PackageListRow;