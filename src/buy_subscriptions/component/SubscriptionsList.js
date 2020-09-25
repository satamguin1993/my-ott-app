import React from 'react';
import buyStore from './../store/buyStore';
import SpinnerWithText from "../../../../common/components/SpinnerWithText";
import {Table, TH, THead} from "@react/react-spectrum/Table";
import {ShowAllInventoryListTableHeaders} from "../constants/constants";
import {observer} from "mobx-react";
import InventoryListBody from './InventoryListBody';

@observer
class SubscriptionsList extends React.Component {

    componentDidMount() {
        if (!(buyStore.inventoryList && buyStore.inventoryList.length > 0))
            buyStore.fetchAllInventoriesByPackage(this.props.packageId);
    }

    render() {

        if (!buyStore.inventoryList || buyStore.inventoryList.length == 0){
            if(buyStore.isFetchingReports)
                return <SpinnerWithText text={"Fetching existing inventory list ..."} />
            else
                return <label align='center'>No records found of migration reports.</label>
        } else
        return (
            <Table>
                <THead>{ShowAllInventoryListTableHeaders.map((header, idx) => <TH key={idx}>{header}</TH>)}</THead>
                <InventoryListBody inventoryList={buyStore.inventoryList} />
            </Table>
        );
    }

}

export default SubscriptionsList;