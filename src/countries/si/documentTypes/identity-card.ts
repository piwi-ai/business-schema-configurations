/**
 * Identity Document (Slovenia)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/si.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Ime'),
        lastName: lastName('Last name / Priimek'),
        personalId: personalId('Personal ID number / EMŠO'),
        documentType: text('Document type / Vrsta dokumenta'),
        documentNumber: text('Document number / Številka dokumenta'),
        issueDate: date('Issue date / Datum izdaje'),
        expirationDate: date('Expiration date / Velja do'),
        issuingAuthority: text('Issuing authority / Izdajatelj'),
        placeOfBirth: text('Place of birth / Kraj rojstva'),
        dateOfBirth: date('Date of birth / Datum rojstva'),
        address: text('Residential address / Naslov'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
