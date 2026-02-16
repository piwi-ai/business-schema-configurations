/**
 * Identity Document (Latvia)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/lv.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Vārds'),
        lastName: lastName('Last name / Uzvārds'),
        personalId: personalId('Personal ID number / Personas kods'),
        documentType: text('Document type / Dokumenta veids'),
        documentNumber: text('Document number / Dokumenta numurs'),
        issueDate: date('Issue date / Izdošanas datums'),
        expirationDate: date('Expiration date / Derīgs līdz'),
        issuingAuthority: text('Issuing authority / Izdevējs'),
        placeOfBirth: text('Place of birth / Dzimšanas vieta'),
        dateOfBirth: date('Date of birth / Dzimšanas datums'),
        address: text('Residential address / Adrese'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
