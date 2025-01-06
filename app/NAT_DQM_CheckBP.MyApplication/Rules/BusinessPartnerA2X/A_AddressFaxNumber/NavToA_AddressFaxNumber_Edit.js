export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressFaxNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressFaxNumber'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressFaxNumber/NavToA_AddressFaxNumber_Edit.action');
    }
}