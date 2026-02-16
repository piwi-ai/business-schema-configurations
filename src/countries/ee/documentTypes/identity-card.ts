/**
 * Identity Document (Estonia)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/ee.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Eesnimi'),
        lastName: lastName('Last name / Perekonnanimi'),
        personalId: personalId('Personal ID number / Isikukood'),
        documentType: text('Document type / Dokumendi liik'),
        documentNumber: text('Document number / Dokumendi number'),
        issueDate: date('Issue date / Väljaandmise kuupäev'),
        expirationDate: date('Expiration date / Kehtiv kuni'),
        issuingAuthority: text('Issuing authority / Väljaandja'),
        placeOfBirth: text('Place of birth / Sünnikoht'),
        dateOfBirth: date('Date of birth / Sünnikuupäev'),
        address: text('Residential address / Aadress'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
