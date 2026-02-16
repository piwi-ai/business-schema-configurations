/**
 * Identity Document (Poland)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/pl.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Imię'),
        lastName: lastName('Last name / Nazwisko'),
        personalId: personalId('Personal ID number / PESEL'),
        documentType: text('Document type / Rodzaj dokumentu'),
        documentNumber: text('Document number / Numer dokumentu'),
        issueDate: date('Issue date / Data wydania'),
        expirationDate: date('Expiration date / Data ważności'),
        issuingAuthority: text('Issuing authority / Organ wydający'),
        placeOfBirth: text('Place of birth / Miejsce urodzenia'),
        dateOfBirth: date('Date of birth / Data urodzenia'),
        address: text('Residential address / Adres zamieszkania'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
