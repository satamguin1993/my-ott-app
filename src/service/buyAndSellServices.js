import React from 'react';
import axios from 'axios';
import {action} from "mobx";

class buyAndSellServices {

    async fetchAllPackageList(packageId,startDate, endDate){
        let url = "http://localhost:9080/panchtantra/v1/inventory?packageId=1&startDate=01/09/2020&endDate=30/09/2020";
        let apiResponse = null;
        let params = {
            packageId : 1,
            startDate : "01/01/2020",
            endDate : "12/12/2020"
        }
        await axios.get(url, {headers: {'Content-Type': 'application/json'}})
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
        return error;
    }

}

export default new buyAndSellServices();