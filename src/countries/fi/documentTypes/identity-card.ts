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
        documentType: text('Document type (Passport, ID Card, Driver License)'),
        documentNumber: text('Document number'),
        issueDate: date('Issue date'),
        expirationDate: date('Expiration date'),
        issuingAuthority: text('Issuing authority'),
        placeOfBirth: text('Place of birth'),
        dateOfBirth: date('Date of birth'),
        address: text('Residential address'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
