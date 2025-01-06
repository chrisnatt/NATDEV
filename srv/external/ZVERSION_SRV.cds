/* checksum : 7e23833bbbc4c3596c6e709c4546e13f */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.message.scope.supported : 'true'
@sap.supported.formats : 'atom json xlsx'
service ZVERSION_SRV {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Configuration Layer'
@sap.value.list : 'true'
entity ZVERSION_SRV.xAPExC_ConfigLayer_VH {
  @sap.display.format : 'UpperCase'
  @sap.text : 'Description'
  @sap.label : 'Lower Value'
  @sap.quickinfo : 'Values for Domains: Single Value/Lower Limit'
  key Value : String(10) not null;
  @sap.label : 'Short Description'
  @sap.quickinfo : 'Short Text for Fixed Values'
  Description : String(60);
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Deployment Target'
@sap.value.list : 'true'
entity ZVERSION_SRV.xAPExC_DeploymentTarget_VH {
  @sap.display.format : 'UpperCase'
  @sap.text : 'Description'
  @sap.label : 'Lower Value'
  @sap.quickinfo : 'Values for Domains: Single Value/Lower Limit'
  key Value : String(10) not null;
  @sap.label : 'Short Description'
  @sap.quickinfo : 'Short Text for Fixed Values'
  Description : String(60);
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.content.version : '1'
@sap.label : 'Language Key'
entity ZVERSION_SRV.xAPExC_LanguageKey_VH {
  @sap.text : 'Description'
  @sap.label : 'Language Key'
  key Language : String(2) not null;
  @sap.label : 'Name'
  @sap.quickinfo : 'Name of Language'
  Description : String(16);
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.searchable : 'true'
@sap.content.version : '1'
@sap.label : 'Process Cluster - Value Help'
entity ZVERSION_SRV.xAPExC_ProcessCluster_VH {
  @sap.label : 'Database Key Field'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key ProcessClusterKey : String(32) not null;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  ProcessCluster_fc : Integer;
  @sap.field.control : 'ProcessCluster_fc'
  @sap.text : 'ProcessClusterDescription'
  @sap.label : 'Process Cluster'
  ProcessCluster : String(40);
  @sap.label : 'Database Key Field'
  HighLevelProcessClusterKey : String(32);
  @sap.label : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ProcessClusterDescription : String(120);
  @sap.label : 'Description'
  ProcessClusterDescriptionISL : String(120);
};

@cds.external : true
@cds.persistence.skip : true
@sap.content.version : '1'
@sap.label : 'Version Text'
entity ZVERSION_SRV.xAPExC_VERSION_TEXT_UI {
  @sap.label : 'Database Key Field'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key VersionTextKey : String(32) not null;
  @sap.field.control : 'Language_fc'
  @sap.label : 'Language Key'
  key Language : String(2) not null;
  @sap.label : 'Key'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key DraftUUID : UUID not null;
  @sap.label : 'Is active'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key IsActiveEntity : Boolean not null;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Delete_from_request_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Include_in_request_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Preparation_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Validation_ac : Boolean;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Language_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  LanguageForEdit_fc : Integer;
  @sap.field.control : 'LanguageForEdit_fc'
  @sap.text : 'LanguageForEdit_Text'
  @sap.label : 'Language'
  @sap.value.list : 'fixed-values'
  LanguageForEdit : String(2);
  @sap.label : 'Name'
  @sap.quickinfo : 'Name of Language'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  LanguageForEdit_Text : String(16);
  @sap.label : 'Description'
  Description : String(120);
  @sap.label : 'Has Draft'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  HasDraftEntity : Boolean;
  @sap.label : 'Key'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ParentDraftUUID : UUID;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft Created On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DraftEntityCreationDateTime : Timestamp;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft Last Changed On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DraftEntityLastChangeDateTime : Timestamp;
  @sap.label : 'Has active'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  HasActiveEntity : Boolean;
  DraftAdministrativeData : Association to ZVERSION_SRV.I_DraftAdministrativeData {  };
  SiblingEntity : Association to ZVERSION_SRV.xAPExC_VERSION_TEXT_UI {  };
  to_LanguageKeyVH : Association to ZVERSION_SRV.xAPExC_LanguageKey_VH {  };
  to_Version : Association to ZVERSION_SRV.xAPExC_VERSION_UI {  };
} actions {
  action A6622CE0FD5FD832AD3F0Delete_from_request() returns ZVERSION_SRV.DummyFunctionImportResult;
  action xAPExC_VERSION_TEXT_UIInclude_in_request() returns ZVERSION_SRV.DummyFunctionImportResult;
  action xAPExC_VERSION_TEXT_UIPreparation(
    @sap.label : 'SideEffectsQualifier'
    SideEffectsQualifier : LargeString
  ) returns ZVERSION_SRV.xAPExC_VERSION_TEXT_UI;
  function xAPExC_VERSION_TEXT_UIValidation(
    @sap.label : 'SideEffectsQualifier'
    SideEffectsQualifier : LargeString
  ) returns ZVERSION_SRV.ValidationFunctionResult;
};

@cds.external : true
@cds.persistence.skip : true
@sap.searchable : 'true'
@sap.content.version : '1'
@sap.deletable.path : 'Delete_mc'
@sap.updatable.path : 'Update_mc'
@sap.label : 'Version'
entity ZVERSION_SRV.xAPExC_VERSION_UI {
  @sap.label : 'Database Key Field'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key VersionKey : String(32) not null;
  @sap.label : 'Key'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key DraftUUID : UUID not null;
  @sap.label : 'Is active'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  key IsActiveEntity : Boolean not null;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Activation_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Copy_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Delete_from_request_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Edit_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Get_where_used_list_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Include_in_request_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Preparation_ac : Boolean;
  @sap.label : 'Dyn. Action Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Validation_ac : Boolean;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  DeploymentTarget_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  ProcessCluster_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  ProcessClusterKey_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  ProcessClusterLi_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Version_fc : Integer;
  @odata.Type : 'Edm.Byte'
  @sap.label : 'Dyn. Field Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  VersionLI_fc : Integer;
  @sap.label : 'Dyn. Method Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Delete_mc : Boolean;
  @sap.label : 'Dyn. Method Control'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Update_mc : Boolean;
  @sap.field.control : 'ProcessClusterKey_fc'
  @sap.label : 'Database Key Field'
  ProcessClusterKey : String(32);
  @sap.field.control : 'ProcessCluster_fc'
  @sap.label : 'Process Cluster'
  @sap.value.list : 'standard'
  ProcessCluster : String(40);
  @sap.field.control : 'ProcessClusterLi_fc'
  @sap.text : 'ProcessClusterDescription'
  @sap.label : 'Process Cluster'
  ProcessClusterLi : String(40);
  @sap.label : 'Process Cluster Description'
  @sap.quickinfo : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ProcessClusterDescription : String(120);
  @sap.label : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ProcessClusterDescriptionISL : String(120);
  @sap.field.control : 'Version_fc'
  @sap.label : 'Version'
  Version : String(40);
  @sap.field.control : 'VersionLI_fc'
  @sap.text : 'VersionDescription'
  @sap.label : 'Version'
  VersionLI : String(40);
  @sap.label : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  VersionDescription : String(120);
  @sap.label : 'Description'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  VersionDescriptionISL : String(120);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Time Stamp'
  @sap.quickinfo : 'UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)'
  ValidFrom : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.field.control : 'DeploymentTarget_fc'
  @sap.text : 'DeploymentTargetDescription'
  @sap.visible : 'false'
  @sap.label : 'Deployment Target'
  @sap.value.list : 'fixed-values'
  DeploymentTarget : String(1);
  @sap.label : 'Short Description'
  @sap.quickinfo : 'Short Text for Fixed Values'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DeploymentTargetDescription : String(60);
  @sap.text : 'ConfigurationLayerDescription'
  @sap.label : 'Configuration Layer'
  @sap.value.list : 'fixed-values'
  ConfigurationLayer : String(10);
  @sap.label : 'Short Description'
  @sap.quickinfo : 'Short Text for Fixed Values'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  ConfigurationLayerDescription : String(60);
  @odata.Type : 'Edm.Byte'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  FCProcessCluster : Integer;
  @sap.label : 'Has Draft'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  HasDraftEntity : Boolean;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft Created On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DraftEntityCreationDateTime : Timestamp;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft Last Changed On'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  DraftEntityLastChangeDateTime : Timestamp;
  @sap.label : 'Has active'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  HasActiveEntity : Boolean;
  DraftAdministrativeData : Association to ZVERSION_SRV.I_DraftAdministrativeData {  };
  SiblingEntity : Association to ZVERSION_SRV.xAPExC_VERSION_UI {  };
  to_ProcessClusterVH : Association to ZVERSION_SRV.xAPExC_ProcessCluster_VH {  };
  to_Text : Composition of many ZVERSION_SRV.xAPExC_VERSION_TEXT_UI {  };
} actions {
  action xAPExC_VERSION_UIActivation() returns ZVERSION_SRV.xAPExC_VERSION_UI;
  action xAPExC_VERSION_UICopy(
    @sap.label : 'Copy with all dependent entries'
    CopySubnode : Boolean
  ) returns ZVERSION_SRV.xAPExC_VERSION_UI;
  action xAPExC_VERSION_UIDelete_from_request() returns ZVERSION_SRV.DummyFunctionImportResult;
  action xAPExC_VERSION_UIEdit(
    @sap.label : 'TRUE'
    PreserveChanges : Boolean
  ) returns ZVERSION_SRV.xAPExC_VERSION_UI;
  action xAPExC_VERSION_UIGet_where_used_list() returns many ZVERSION_SRV.TWhereUsedList;
  action xAPExC_VERSION_UIInclude_in_request() returns ZVERSION_SRV.DummyFunctionImportResult;
  action xAPExC_VERSION_UIPreparation(
    @sap.label : 'SideEffectsQualifier'
    SideEffectsQualifier : LargeString
  ) returns ZVERSION_SRV.xAPExC_VERSION_UI;
  function xAPExC_VERSION_UIValidation(
    @sap.label : 'SideEffectsQualifier'
    SideEffectsQualifier : LargeString
  ) returns ZVERSION_SRV.ValidationFunctionResult;
};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.searchable : 'true'
@sap.addressable : 'false'
@sap.content.version : '1'
@sap.label : 'Draft Administration Data'
entity ZVERSION_SRV.I_DraftAdministrativeData {
  @sap.label : 'Draft (Technical ID)'
  key DraftUUID : UUID not null;
  @sap.display.format : 'UpperCase'
  @sap.label : 'Draft Entity ID'
  key DraftEntityType : String(30) not null;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.filter.restriction : 'interval'
  @sap.label : 'Draft Created On'
  CreationDateTime : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.text : 'CreatedByUserDescription'
  @sap.label : 'Draft Created By'
  CreatedByUser : String(12);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.filter.restriction : 'interval'
  @sap.label : 'Draft Last Changed On'
  LastChangeDateTime : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.text : 'LastChangedByUserDescription'
  @sap.label : 'Draft Last Changed By'
  LastChangedByUser : String(12);
  @sap.display.format : 'UpperCase'
  @sap.label : 'Draft Access Type'
  DraftAccessType : String(1);
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft In Process Since'
  ProcessingStartDateTime : Timestamp;
  @sap.display.format : 'UpperCase'
  @sap.text : 'InProcessByUserDescription'
  @sap.label : 'Draft In Process By'
  InProcessByUser : String(12);
  @sap.label : 'Draft Is Kept By User'
  DraftIsKeptByUser : Boolean;
  @odata.Type : 'Edm.DateTimeOffset'
  @odata.Precision : 7
  @sap.label : 'Draft Locked Since'
  EnqueueStartDateTime : Timestamp;
  @sap.label : 'Draft Created By Me'
  DraftIsCreatedByMe : Boolean;
  @sap.label : 'Draft Last Changed By Me'
  DraftIsLastChangedByMe : Boolean;
  @sap.label : 'Draft In Process By Me'
  DraftIsProcessedByMe : Boolean;
  @sap.label : 'Draft Created By (Description)'
  CreatedByUserDescription : String(80);
  @sap.label : 'Draft Last Changed By (Description)'
  LastChangedByUserDescription : String(80);
  @sap.label : 'Draft In Process By (Description)'
  InProcessByUserDescription : String(80);
};

@cds.external : true
type ZVERSION_SRV.DummyFunctionImportResult {
  @sap.label : 'TRUE'
  IsInvalid : Boolean;
};

@cds.external : true
type ZVERSION_SRV.ValidationFunctionResult {
  @sap.label : 'Is valid'
  IsValid : Boolean;
};

@cds.external : true
type ZVERSION_SRV.TWhereUsedList {
  @sap.label : 'Database Key Field'
  ConfigKey : String(32);
  @sap.label : 'Process Cluster'
  ProcCluster : String(40);
  @sap.label : 'Version'
  Version : String(40);
  @sap.label : 'Value'
  UseType : String(255);
  @sap.label : 'Value'
  CompoundKey : String(255);
};

