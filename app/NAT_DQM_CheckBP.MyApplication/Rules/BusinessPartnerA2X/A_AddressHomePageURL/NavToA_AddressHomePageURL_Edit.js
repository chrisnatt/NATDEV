export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressHomePageURL')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'A_AddressHomePageURL'
                },
                'OnSuccess': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressHomePageURL/NavToA_AddressHomePageURL_Edit.action');
    }
}