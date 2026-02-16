/**
 * Identity Document (Slovakia)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/sk.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Meno'),
        lastName: lastName('Last name / Priezvisko'),
        personalId: personalId('Personal ID number / Rodné číslo'),
        documentType: text('Document type / Druh dokladu'),
        documentNumber: text('Document number / Číslo dokladu'),
        issueDate: date('Issue date / Dátum vydania'),
        expirationDate: date('Expiration date / Dátum platnosti'),
        issuingAuthority: text('Issuing authority / Vydal'),
        placeOfBirth: text('Place of birth / Miesto narodenia'),
        dateOfBirth: date('Date of birth / Dátum narodenia'),
        address: text('Residential address / Adresa'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
