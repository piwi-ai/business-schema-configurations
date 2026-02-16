/**
 * Identity Document (Lithuania)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/lt.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Vardas'),
        lastName: lastName('Last name / Pavardė'),
        personalId: personalId('Personal ID number / Asmens kodas'),
        documentType: text('Document type / Dokumento tipas'),
        documentNumber: text('Document number / Dokumento numeris'),
        issueDate: date('Issue date / Išdavimo data'),
        expirationDate: date('Expiration date / Galioja iki'),
        issuingAuthority: text('Issuing authority / Išdavusi įstaiga'),
        placeOfBirth: text('Place of birth / Gimimo vieta'),
        dateOfBirth: date('Date of birth / Gimimo data'),
        address: text('Residential address / Adresas'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
