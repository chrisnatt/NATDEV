using { ZAPI_BUSINESS_PARTNER } from '../srv/external/ZAPI_BUSINESS_PARTNER.cds'; 
using { ZVERSION_SRV } from '../srv/external/ZVERSION_SRV.cds'; 
using { BusinessRole_Read } from '../srv/external/BusinessRole_Read.cds'; 
namespace NAT_DQM_CheckBP;

using { cuid } from '@sap/cds/common';

entity Publishers : cuid
{
    name : String(100)
        @mandatory;
    street : String(100);
    city : String(100);
    postalCode : String(10);
    country : String(100);
    contactNumber : String(15);
    email : String(100);
    website : String(100);
}

annotate Publishers with @assert.unique :
{
    name : [ name ],
};
