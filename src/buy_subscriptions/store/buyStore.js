import {action, observable} from 'mobx';

import apiService from './../../../my-app/service/buyAndSellServices'

class buyStore {

    @observable buyData;
    @observable ottName;
    @observable startDate;
    @observable endDate;
    @observable subscriptionsData;
    @observable packageList;
    @observable inventoryList;
    @observable isFetchingReports;
    @observable buyRequest;
    @observable inValidUniqueURL;
    @observable validUniqueURL;

    constructor() {
        this.buyData = null;
        this.ottName = null;
        this.startDate = null;
        this.endDate = null;
        this.subscriptionsData = null;
        this.packageList = [];
        this.inventoryList = [];
        this.isFetchingReports = false;
        this.inValidUniqueURL = null;
        this.validUniqueURL = null;
    }

    @action.bound
    saveSubscriptionValue(days, connectionName, numberOfConnections, startDate, endDate){
        this.subscriptionsData = {
            days : days,
            connectionName : connectionName,
            numberOfConnections : numberOfConnections,
            startDate : startDate,
            endDate : endDate
        }
    }

    async fetchAllInventoriesByPackage(packageId){
        this.isFetchingReports = true;
        //let packageId = this.convertOttToPackageId(ottName);
        let fetchInventoryList = await apiService.fetchALlInventoryList(packageId,
            this.props.startDate, this.props.endDate);

        if (fetchInventoryList){
            this.inventoryList = this.inventoryList.concat(fetchInventoryList);
            this.isFetchingReports = false;
        }
    }

    async fetchPackageDetailsList(){
        this.isFetchingReports = true;
        let fetchPackageList = await apiService.fetchAllPackageList();

        if (fetchPackageList){
            this.packageList = this.packageList.concat(fetchPackageList);
            this.isFetchingReports = false;
        }
    }

    async saveBuyRequest(){
        let apiResponse = await apiService.saveBuyRequest();
        if (apiResponse && apiResponse.error) {

        } else if (apiResponse){
            this.validUniqueURL = apiResponse.uniqueURL;
        }
    }

    @action.bound
    updatePostBuyRequest(packageId, startDate, endDate){
        this.buyRequest = {
            packageId : packageId,
            startDate : startDate,
            endDate : endDate
        }
    }

    convertOttToPackageId = (ottName) => {
        switch (ottName) {
            case 'netflix':
                return 1;
                break;
            case 'sonyLiv':
                return 2;
                break;
            case 'zee5':
                return 3;
                break;
            case 'hotstar':
                return 4;
                break;
            case 'amazonPrime':
                return 5;
                break;
            default:
                return -1;
                break;

        }
    }
}

export default new buyStore();