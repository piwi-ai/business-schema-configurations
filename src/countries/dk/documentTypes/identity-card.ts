/**
 * Identity Document (Denmark)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/dk.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Fornavn'),
        lastName: lastName('Last name / Efternavn'),
        personalId: personalId('Personal ID number / CPR-nummer'),
        documentType: text('Document type / Dokumenttype'),
        documentNumber: text('Document number / Dokumentnummer'),
        issueDate: date('Issue date / Udstedelsesdato'),
        expirationDate: date('Expiration date / Udløbsdato'),
        issuingAuthority: text('Issuing authority / Udstedende myndighed'),
        placeOfBirth: text('Place of birth / Fødested'),
        dateOfBirth: date('Date of birth / Fødselsdato'),
        address: text('Residential address / Adresse'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
