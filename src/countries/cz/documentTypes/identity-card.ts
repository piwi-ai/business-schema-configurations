/**
 * Identity Document (Czech Republic)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/cz.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Jméno'),
        lastName: lastName('Last name / Příjmení'),
        personalId: personalId('Personal ID number / Rodné číslo'),
        documentType: text('Document type / Druh dokladu'),
        documentNumber: text('Document number / Číslo dokladu'),
        issueDate: date('Issue date / Datum vydání'),
        expirationDate: date('Expiration date / Platnost do'),
        issuingAuthority: text('Issuing authority / Vydal'),
        placeOfBirth: text('Place of birth / Místo narození'),
        dateOfBirth: date('Date of birth / Datum narození'),
        address: text('Residential address / Adresa'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
