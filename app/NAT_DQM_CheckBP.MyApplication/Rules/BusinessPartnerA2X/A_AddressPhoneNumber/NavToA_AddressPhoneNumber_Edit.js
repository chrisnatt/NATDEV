export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressPhoneNumber')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressPhoneNumber'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressPhoneNumber/NavToA_AddressPhoneNumber_Edit.action');
    }
}