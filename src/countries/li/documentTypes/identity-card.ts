/**
 * Identity Document (Liechtenstein)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/li.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Vorname'),
        lastName: lastName('Last name / Nachname'),
        personalId: personalId('Personal ID number / PEID'),
        documentType: text('Document type / Dokumentart'),
        documentNumber: text('Document number / Dokumentennummer'),
        issueDate: date('Issue date / Ausstellungsdatum'),
        expirationDate: date('Expiration date / Gültig bis'),
        issuingAuthority: text('Issuing authority / Ausstellende Behörde'),
        placeOfBirth: text('Place of birth / Geburtsort'),
        dateOfBirth: date('Date of birth / Geburtsdatum'),
        address: text('Residential address / Wohnort'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
