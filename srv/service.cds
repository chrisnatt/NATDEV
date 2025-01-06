using { ZAPI_BUSINESS_PARTNER } from './external/ZAPI_BUSINESS_PARTNER.cds'; 
using { ZVERSION_SRV } from './external/ZVERSION_SRV.cds'; 
using { BusinessRole_Read } from './external/BusinessRole_Read.cds'; 
using { NAT_DQM_CheckBP as my } from '../db/schema.cds';

@path: '/service/nAT_DQM_CheckBP'
@requires: 'authenticated-user'
service nAT_DQM_CheckBPSrv {
  @odata.draft.enabled
  entity Publishers as projection on my.Publishers;
}