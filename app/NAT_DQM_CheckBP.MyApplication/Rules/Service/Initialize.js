export default function Initialize(context) {

    // Perform pre data initialization task

    // Initialize all your Data sources
    let _BusinessPartnerA2X = context.executeAction('/MyApplication/Actions/BusinessPartnerA2X/Service/InitializeOnline.action');

    //You can add more service initialize actions here

    return Promise.all([_BusinessPartnerA2X]).then(() => {
        // After Initializing the DB connections

        // Display successful initialization  message to the user
        return context.executeAction({

            "Name": "/MyApplication/Actions/GenericToastMessage.action",
            "Properties": {
                "Message": "Application Services Initialized",
                "Animated": true,
                "Duration": 1,
                "IsIconHidden": true,
                "NumberOfLines": 1
            }
        });
    }).catch(() => {
        return false;
    });
}