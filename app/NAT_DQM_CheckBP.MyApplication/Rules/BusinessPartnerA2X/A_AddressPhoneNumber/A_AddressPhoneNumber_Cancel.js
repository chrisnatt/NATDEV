export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressPhoneNumber'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}