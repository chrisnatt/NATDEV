export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressFaxNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressFaxNumber'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/A_AddressFaxNumber_UpdateEntity.action');
    }
}