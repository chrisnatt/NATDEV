export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/CloseModalPage_Cancel.action');
    }
}