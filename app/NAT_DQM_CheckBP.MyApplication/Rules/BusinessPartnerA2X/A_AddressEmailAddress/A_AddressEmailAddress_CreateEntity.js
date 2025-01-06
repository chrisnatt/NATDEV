export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/MyApplication/Services/BusinessPartnerA2X.service').isDraftEnabled('A_AddressEmailAddress')) {
        return clientAPI.executeAction({
            'Name': '/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/MyApplication/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'A_AddressEmailAddress',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/MyApplication/Actions/BusinessPartnerA2X/A_AddressEmailAddress/A_AddressEmailAddress_CreateEntity.action');
    }
}