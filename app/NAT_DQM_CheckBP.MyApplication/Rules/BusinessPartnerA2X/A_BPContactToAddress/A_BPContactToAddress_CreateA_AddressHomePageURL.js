export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_BPContactToAddress',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/A_BPContactToAddress_CreateA_AddressHomePageURL.action');
    }
}