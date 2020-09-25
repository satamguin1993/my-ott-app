const ActiveStateEnum =
    {
        SELECT_RADIO_GROUP_STEP : 0,
        SELECT_CONNECTION_STEP : 1,
        SELECT_PAYMENT_STEP : 2,
        SELECT_EMAIL_STEP : 3
    }

const ShowAllPackageListTableHeaders = ['Package Id', 'Package Name', 'Connection', 'Basis', 'Price', 'Status'];

const ShowAllInventoryListTableHeaders = ['Package Id', 'Name', 'Connections', 'Basis', 'Price', 'Status', 'User Name', 'Select'];

export {ActiveStateEnum, ShowAllPackageListTableHeaders, ShowAllInventoryListTableHeaders};
