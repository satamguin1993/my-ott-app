import React from 'react';
import axios from 'axios';
import {action} from "mobx";

class buyAndSellServices {

    async fetchAllPackageList(packageId,startDate, endDate){
        let url = "localhost:8080/panchtantra/v1/inventory";
        let apiResponse = null;
        let params = {
            packageId : packageId,
            startDate : startDate,
            endDate : endDate
        }
        await axios.get(url, {headers: {'Content-Type': 'application/json'}}, params)
            .then((response) => {
                apiResponse = response.data
            })
            .catch((error) => {
                apiResponse = this.errorHandle(error)
            });
        return apiResponse;
    }

    @action.bound
    errorHandle = (error) => {

    }

}

export default new buyAndSellServices();