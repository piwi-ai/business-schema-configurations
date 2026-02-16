/**
 * Identity Document (Norway)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/no.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Fornavn'),
        lastName: lastName('Last name / Etternavn'),
        personalId: personalId('Personal ID number / Fødselsnummer'),
        documentType: text('Document type / Dokumenttype'),
        documentNumber: text('Document number / Dokumentnummer'),
        issueDate: date('Issue date / Utstedelsesdato'),
        expirationDate: date('Expiration date / Gyldig til'),
        issuingAuthority: text('Issuing authority / Utstedende myndighet'),
        placeOfBirth: text('Place of birth / Fødested'),
        dateOfBirth: date('Date of birth / Fødselsdato'),
        address: text('Residential address / Adresse'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
