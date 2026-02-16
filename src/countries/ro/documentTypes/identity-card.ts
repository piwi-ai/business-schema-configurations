/**
 * Identity Document (Romania)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/ro.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Prenume'),
        lastName: lastName('Last name / Nume'),
        personalId: personalId('Personal ID number / CNP'),
        documentType: text('Document type / Tipul documentului'),
        documentNumber: text('Document number / Numărul documentului'),
        issueDate: date('Issue date / Data eliberării'),
        expirationDate: date('Expiration date / Data expirării'),
        issuingAuthority: text('Issuing authority / Emis de'),
        placeOfBirth: text('Place of birth / Locul nașterii'),
        dateOfBirth: date('Date of birth / Data nașterii'),
        address: text('Residential address / Adresa'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
