/**
 * Identity Document (Malta)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/mt.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Isem'),
        lastName: lastName('Last name / Kunjom'),
        personalId: personalId('Personal ID number / Identity Card Number'),
        documentType: text('Document type / Tip ta\' Dokument'),
        documentNumber: text('Document number / Numru tad-Dokument'),
        issueDate: date('Issue date / Data tal-Ħruġ'),
        expirationDate: date('Expiration date / Data ta\' Skadenza'),
        issuingAuthority: text('Issuing authority / Awtorità li Ħarġet'),
        placeOfBirth: text('Place of birth / Post tat-Twelid'),
        dateOfBirth: date('Date of birth / Data tat-Twelid'),
        address: text('Residential address / Indirizz'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
