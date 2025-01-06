/* checksum : 51a0f4875691f9e5c512b8bfa74d0670 */
@cds.external : true
@Aggregation.ApplySupported : {
  Transformations: [ 'aggregate', 'groupby', 'filter' ],
  Rollup: #None
}
@Common.ApplyMultiUnitBehaviorForSortingAndFiltering : true
@Capabilities.FilterFunctions : [
  'eq',
  'ne',
  'gt',
  'ge',
  'lt',
  'le',
  'and',
  'or',
  'contains',
  'startswith',
  'endswith',
  'any',
  'all'
]
@Capabilities.SupportedFormats : [ 'application/json', 'application/pdf' ]
@PDF.Features : {
  DocumentDescriptionReference: '../../../../default/iwbep/common/0001/$metadata',
  DocumentDescriptionCollection: 'MyDocumentDescriptions',
  ArchiveFormat: true,
  Border: true,
  CoverPage: true,
  FitToPage: true,
  FontName: true,
  FontSize: true,
  Margin: true,
  Padding: true,
  Signature: true,
  HeaderFooter: true,
  ResultSizeDefault: 20000,
  ResultSizeMaximum: 20000,
  IANATimezoneFormat: true,
  Treeview: true
}
@Capabilities.KeyAsSegmentSupported : true
@Capabilities.AsynchronousRequestsSupported : true
service BusinessRole_Read {};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Business Catalogs'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleBusinessCatalogs {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Business Catalog ID'
  @Common.QuickInfo : 'Business Catalog ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Catalog ID'
  key BusinessCatalogID : String(35) not null;
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Business Users'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleBusinessUsers {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Business User ID'
  @Common.QuickInfo : 'Business User ID'
  @Common.IsUpperCase : true
  key UserID : String(12) not null;
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Derived Business Roles'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleDerivedRoles {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Derived Business Role ID'
  @Common.QuickInfo : 'Derived Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key DerivedBusinessRoleID : String(40) not null;
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Launchpad Spaces'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleLaunchpadSpaces {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Fiori Space ID'
  @Common.QuickInfo : 'Fiori Space ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Space ID'
  key SpaceID : String(35) not null;
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Restriction Fields'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.NonUpdatableNavigationProperties : [ 'RestrictionValues' ]
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleRestrictionFields {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Restriction Type Assignment UUID'
  @Common.QuickInfo : 'Restriction Type Assignment UUID'
  @Common.Heading : 'Unique universal identifier'
  key RestrictionTypeAssignmentUUID : UUID not null;
  @Common.Label : 'Restriction Field Name'
  @Common.QuickInfo : 'Restriction Field Name'
  @Common.IsUpperCase : true
  @Common.Heading : 'Restriction Field'
  key FieldName : String(30) not null;
  @Common.Label : 'Maintain Status'
  @Common.QuickInfo : 'Maintain Status'
  MaintainStatus : String(13) not null;
  @Common.Label : 'Is Leading'
  @Common.QuickInfo : 'Is Leading Restriction'
  IsLeading : Boolean not null;
  RestrictionValues : Association to many BusinessRole_Read.BusinessRoleRestrictionValues {  };
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Restrictions'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.NonUpdatableNavigationProperties : [ 'RestrictionFields' ]
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleRestrictions {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Restriction Type Assignment UUID'
  @Common.QuickInfo : 'Restriction Type Assignment UUID'
  @Common.Heading : 'Unique universal identifier'
  key RestrictionTypeAssignmentUUID : UUID not null;
  @Common.Label : 'Access Category'
  @Common.QuickInfo : 'Access Category'
  @Common.IsUpperCase : true
  @Common.Heading : 'Access Category Type'
  AccessCategory : String(1) not null;
  @Common.Label : 'Restriction Type'
  @Common.QuickInfo : 'Restriction Type'
  @Common.IsUpperCase : true
  @Common.Heading : 'Restriction Type ID'
  RestrictionType : String(30) not null;
  RestrictionFields : Association to many BusinessRole_Read.BusinessRoleRestrictionFields {  };
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Restriction Values'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoleRestrictionValues {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Restriction Type Assignment UUID'
  @Common.QuickInfo : 'Restriction Type Assignment UUID'
  @Common.Heading : 'Unique universal identifier'
  key RestrictionTypeAssignmentUUID : UUID not null;
  @Common.Label : 'Restriction Field Name'
  @Common.QuickInfo : 'Restriction Field Name'
  @Common.IsUpperCase : true
  @Common.Heading : 'Restriction Field'
  key FieldName : String(30) not null;
  @Common.Label : 'Restriction Value Assignment UUID'
  @Common.QuickInfo : 'Restriction Value Assignment UUID'
  @Common.Heading : 'Unique universal identifier'
  key RestrictionValueAssignmentUUID : UUID not null;
  @Common.Label : 'Low Value'
  @Common.QuickInfo : 'Low Restriction Value'
  @Common.Heading : 'Authorization value'
  LowValue : String(40) not null;
  @Common.Label : 'High Value'
  @Common.QuickInfo : 'High Restriction Value'
  @Common.Heading : 'Authorization value'
  HighValue : String(40) not null;
};

@cds.external : true
@cds.persistence.skip : true
@Common.Label : 'Business Roles'
@Capabilities.SearchRestrictions.Searchable : false
@Capabilities.FilterRestrictions.Filterable : true
@Capabilities.FilterRestrictions.FilterExpressionRestrictions : [
  {
    Property: LongText,
    AllowedExpressions: 'SearchExpression'
  }
]
@Capabilities.SortRestrictions.NonSortableProperties : [ 'LongText' ]
@Capabilities.InsertRestrictions.Insertable : false
@Capabilities.DeleteRestrictions.Deletable : false
@Capabilities.UpdateRestrictions.Updatable : false
@Capabilities.UpdateRestrictions.NonUpdatableNavigationProperties : [ 'BusinessCatalogs', 'BusinessUsers', 'DerivedBusinessRoles', 'LaunchpadSpaces', 'Restrictions' ]
@Capabilities.UpdateRestrictions.QueryOptions.SelectSupported : true
entity BusinessRole_Read.BusinessRoles {
  @Common.Label : 'Business Role ID'
  @Common.QuickInfo : 'Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  key BusinessRoleID : String(40) not null;
  @Common.Label : 'Business Role Description'
  @Common.QuickInfo : 'Business Role Description'
  @Common.Heading : 'Description'
  Description : String(80) not null;
  @Common.Label : 'Business Role Long Text'
  @Common.QuickInfo : 'Business Role Long Text'
  @Common.Heading : 'Long Text'
  LongText : String(1024) not null;
  @Common.Label : 'Business Role Template ID'
  @Common.QuickInfo : 'Business Role Template ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role Template ID'
  BusinessRoleTemplateID : String(30) not null;
  @Common.Label : 'Is Leading'
  @Common.QuickInfo : 'Is Leading Business Role'
  @Common.Heading : 'Master Business Role'
  IsLeading : Boolean not null;
  @Common.Label : 'Leading Business Role ID'
  @Common.QuickInfo : 'Leading Business Role ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'Business Role ID'
  LeadingBusinessRoleID : String(40) not null;
  @Common.Label : 'Is Derived'
  @Common.QuickInfo : 'Is Derived Business Role'
  IsDerived : Boolean not null;
  @Common.Label : 'Business Role Group'
  @Common.QuickInfo : 'Business Role Group'
  @Common.IsUpperCase : true
  @Common.Heading : 'Role Group'
  BusinessRoleGroup : String(12) not null;
  @Common.Label : 'Inherit Spaces in Derived Business Roles'
  @Common.QuickInfo : 'Inherit Spaces in Derived Business Roles'
  InheritSpacesInDerivedRole : Boolean not null;
  @Common.Label : 'Exposed to SAP BTP'
  @Common.QuickInfo : 'Exposed to SAP Business Technology Platform'
  @Common.Heading : 'CFLP Exposure'
  ExposedToSAPBTP : Boolean not null;
  @Common.Label : 'Price Category Code'
  @Common.QuickInfo : 'Price Category Code'
  @Common.IsUpperCase : true
  PriceCategoryCode : String(30) not null;
  @Common.Label : 'Price Category'
  @Common.QuickInfo : 'Price Category'
  @Common.Heading : 'Description'
  PriceCategory : String(80) not null;
  @Common.Label : 'Write Access Restriction Code'
  @Common.QuickInfo : 'Write Access Restriction Code'
  WriteAccessRestrictionCode : String(1) not null;
  @Common.Label : 'Read Access Restriction Code'
  @Common.QuickInfo : 'Read Access Restriction Code'
  ReadAccessRestrictionCode : String(1) not null;
  @Common.Label : 'F4 Access Restriction Code'
  @Common.QuickInfo : 'F4 Access Restriction Code'
  F4AccessRestrictionCode : String(1) not null;
  @Common.Label : 'Imported'
  @Common.QuickInfo : 'Imported Status'
  Imported : Boolean not null;
  @Common.Label : 'Exported'
  @Common.QuickInfo : 'Exported Status'
  Exported : Boolean not null;
  @odata.Precision : 7
  @odata.Type : 'Edm.DateTimeOffset'
  @Common.Label : 'Last Changed DateTime'
  @Common.QuickInfo : 'Last Changed DateTime'
  @Common.Heading : 'Time Stamp'
  LastChangedDateTime : Timestamp;
  @Common.Label : 'Last Changed By User ID'
  @Common.QuickInfo : 'Last Changed by User ID'
  @Common.IsUpperCase : true
  @Common.Heading : 'User'
  LastChangedByUserID : String(12) not null;
  @Common.Label : 'Last Changed By User Name'
  @Common.QuickInfo : 'Last Changed by User Name'
  @Common.IsUpperCase : true
  @Common.Heading : 'User ID alias'
  LastChangedByUserName : String(40) not null;
  @Common.Label : 'Last Changed By User Description'
  @Common.QuickInfo : 'Last Changed by User Description'
  @Common.Heading : 'Description of the Technical User Account'
  LastChangedByUserDescription : String(80) not null;
  @Common.Label : 'Last Changed By EMail'
  @Common.QuickInfo : 'Last Changed by EMail Address'
  @Common.Heading : 'Email Address'
  LastChangedByEMailAddress : String(241) not null;
  @Common.Label : 'Last Changed By GlobalUserID'
  @Common.QuickInfo : 'Last Changed by GlobalUserID'
  @Common.Heading : 'Global User ID'
  LastChangedByGlobalUserID : String(36) not null;
  BusinessCatalogs : Association to many BusinessRole_Read.BusinessRoleBusinessCatalogs {  };
  BusinessUsers : Association to many BusinessRole_Read.BusinessRoleBusinessUsers {  };
  DerivedBusinessRoles : Association to many BusinessRole_Read.BusinessRoleDerivedRoles {  };
  LaunchpadSpaces : Association to many BusinessRole_Read.BusinessRoleLaunchpadSpaces {  };
  Restrictions : Association to many BusinessRole_Read.BusinessRoleRestrictions {  };
};

