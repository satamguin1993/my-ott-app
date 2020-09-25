import React from 'react';
import {observer} from "mobx-react";
import buyStore from "../store/buyStore";
import SpinnerWithText from "../../../../common/components/SpinnerWithText";
import {Table, TH, THead} from "@react/react-spectrum/Table";
import {ShowAllPackageListTableHeaders} from "../constants/constants";
import PackageListBody from "./PackageListBody";

@observer
class PackageDetails extends React.Component {

    componentDidMount() {
        if (!(buyStore.packageList && buyStore.packageList.length == 0)){
            buyStore.fetchPackageDetailsList();
        }
    }

    render() {
        if (!buyStore.inventoryList || buyStore.inventoryList.length == 0){
            if (buyStore.isFetchingReports)
                return <SpinnerWithText text={"Fetching existing inventory list ..."} />
            else
                return <label align='center'>No records found of migration reports.</label>
        } else
        return (
            <Table>
                <THead>{ShowAllPackageListTableHeaders.map((header, idx) => <TH key={idx}>{header}</TH>)}</THead>
                <PackageListBody packageList={buyStore.packageList} />
            </Table>
        );
    }

}

export default PackageDetails;