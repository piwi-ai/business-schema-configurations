/**
 * Identity Document (Ireland)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/ie.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name'),
        lastName: lastName('Last name'),
        personalId: personalId('Personal ID number / PPS Number'),
        documentType: text('Document type'),
        documentNumber: text('Document number'),
        issueDate: date('Issue date / Date of issue'),
        expirationDate: date('Expiration date / Expiry date'),
        issuingAuthority: text('Issuing authority'),
        placeOfBirth: text('Place of birth'),
        dateOfBirth: date('Date of birth'),
        address: text('Residential address / Address'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
