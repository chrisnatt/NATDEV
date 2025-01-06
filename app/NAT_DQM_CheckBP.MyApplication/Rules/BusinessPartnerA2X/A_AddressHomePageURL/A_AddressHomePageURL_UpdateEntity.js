export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressHomePageURL')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressHomePageURL'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/A_AddressHomePageURL_UpdateEntity.action');
    }
}