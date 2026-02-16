/**
 * Identity Document (Netherlands)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/nl.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Voornaam'),
        lastName: lastName('Last name / Achternaam'),
        personalId: personalId('Personal ID number / BSN'),
        documentType: text('Document type / Documenttype'),
        documentNumber: text('Document number / Documentnummer'),
        issueDate: date('Issue date / Datum van uitgifte'),
        expirationDate: date('Expiration date / Geldig tot'),
        issuingAuthority: text('Issuing authority / Instantie van uitgifte'),
        placeOfBirth: text('Place of birth / Geboorteplaats'),
        dateOfBirth: date('Date of birth / Geboortedatum'),
        address: text('Residential address / Adres'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
