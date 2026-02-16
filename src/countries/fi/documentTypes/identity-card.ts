/**
 * Identity Document (Finland)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/fi.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Etunimi'),
        lastName: lastName('Last name / Sukunimi'),
        personalId: personalId('Personal ID number / Henkilötunnus'),
        documentType: text('Document type / Asiakirjatyyppi'),
        documentNumber: text('Document number / Asiakirjan numero'),
        issueDate: date('Issue date / Myöntämispäivä'),
        expirationDate: date('Expiration date / Viimeinen voimassaolopäivä'),
        issuingAuthority: text('Issuing authority / Myöntävä viranomainen'),
        placeOfBirth: text('Place of birth / Syntymäpaikka'),
        dateOfBirth: date('Date of birth / Syntymäaika'),
        address: text('Residential address / Osoite'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
