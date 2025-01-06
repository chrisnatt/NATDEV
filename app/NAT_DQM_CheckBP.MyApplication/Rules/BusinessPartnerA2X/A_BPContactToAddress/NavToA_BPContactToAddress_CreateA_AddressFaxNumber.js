export default function NavToCreate(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_BPContactToAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_BPContactToAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_BPContactToAddress/NavToA_BPContactToAddress_CreateA_AddressFaxNumber.action');
    }
}