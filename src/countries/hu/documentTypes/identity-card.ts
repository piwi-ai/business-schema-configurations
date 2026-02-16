/**
 * Identity Document (Hungary)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/hu.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Utónév'),
        lastName: lastName('Last name / Családnév'),
        personalId: personalId('Personal ID number / TAJ szám'),
        documentType: text('Document type / Okmány típusa'),
        documentNumber: text('Document number / Okmány száma'),
        issueDate: date('Issue date / Kiállítás dátuma'),
        expirationDate: date('Expiration date / Érvényességi idő'),
        issuingAuthority: text('Issuing authority / Kiállító hatóság'),
        placeOfBirth: text('Place of birth / Születési hely'),
        dateOfBirth: date('Date of birth / Születési idő'),
        address: text('Residential address / Lakcím'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
