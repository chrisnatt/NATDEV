using { nAT_DQM_CheckBPSrv } from '../srv/service.cds';

annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.HeaderInfo: { TypeName: 'Business Partner', TypeNamePlural: 'Business Partners', Title: { Value: businessPartnersID } };
annotate nAT_DQM_CheckBPSrv.BusinessPartners with {
  ID @UI.Hidden @Common.Text: { $value: businessPartnersID, ![@UI.TextArrangement]: #TextOnly }
};
annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.Identification: [{ Value: businessPartnersID }];
annotate nAT_DQM_CheckBPSrv.BusinessPartners with {
  businessPartnersID @title: 'Business Partner ID';
  name @title: 'Business Partner Name';
  type @title: 'Business Partner Type';
  status @title: 'Status';
  country @title: 'Country'
};

annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.LineItem: [
 { $Type: 'UI.DataField', Value: businessPartnersID },
 { $Type: 'UI.DataField', Value: name },
 { $Type: 'UI.DataField', Value: type },
 { $Type: 'UI.DataField', Value: status },
 { $Type: 'UI.DataField', Value: country }
];

annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.FieldGroup #Main: {
  $Type: 'UI.FieldGroupType', Data: [
 { $Type: 'UI.DataField', Value: businessPartnersID },
 { $Type: 'UI.DataField', Value: name },
 { $Type: 'UI.DataField', Value: type },
 { $Type: 'UI.DataField', Value: status },
 { $Type: 'UI.DataField', Value: country }
  ]
};

annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.Facets: [
  { $Type: 'UI.ReferenceFacet', ID: 'Main', Label: 'General Information', Target: '@UI.FieldGroup#Main' }
];

annotate nAT_DQM_CheckBPSrv.BusinessPartners with @UI.SelectionFields: [
  businessPartnersID
];

