/**
 * Identity Document (Sweden)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/se.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Förnamn'),
        lastName: lastName('Last name / Efternamn'),
        personalId: personalId('Personal ID number / Personnummer'),
        documentType: text('Document type / Dokumenttyp'),
        documentNumber: text('Document number / Dokumentnummer'),
        issueDate: date('Issue date / Utfärdandedatum'),
        expirationDate: date('Expiration date / Giltig t.o.m.'),
        issuingAuthority: text('Issuing authority / Utfärdande myndighet'),
        placeOfBirth: text('Place of birth / Födelseort'),
        dateOfBirth: date('Date of birth / Födelsedatum'),
        address: text('Residential address / Adress'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
