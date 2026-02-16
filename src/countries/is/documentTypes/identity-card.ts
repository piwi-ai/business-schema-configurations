/**
 * Identity Document (Iceland)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/is.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Fornafn'),
        lastName: lastName('Last name / Eftirnafn'),
        personalId: personalId('Personal ID number / Kennitala'),
        documentType: text('Document type / Tegund skilríkja'),
        documentNumber: text('Document number / Númer skilríkja'),
        issueDate: date('Issue date / Útgáfudagur'),
        expirationDate: date('Expiration date / Gildir til'),
        issuingAuthority: text('Issuing authority / Útgefandi'),
        placeOfBirth: text('Place of birth / Fæðingarstaður'),
        dateOfBirth: date('Date of birth / Fæðingardagur'),
        address: text('Residential address / Heimilisfang'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
