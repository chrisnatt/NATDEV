export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressEmailAddress'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/NavToA_AddressEmailAddress_Edit.action');
    }
}