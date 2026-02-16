/**
 * Identity Document (Croatia)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/hr.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Ime'),
        lastName: lastName('Last name / Prezime'),
        personalId: personalId('Personal ID number / OIB'),
        documentType: text('Document type / Vrsta isprave'),
        documentNumber: text('Document number / Broj isprave'),
        issueDate: date('Issue date / Datum izdavanja'),
        expirationDate: date('Expiration date / Vrijedi do'),
        issuingAuthority: text('Issuing authority / Izdavatelj'),
        placeOfBirth: text('Place of birth / Mjesto rođenja'),
        dateOfBirth: date('Date of birth / Datum rođenja'),
        address: text('Residential address / Adresa'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
