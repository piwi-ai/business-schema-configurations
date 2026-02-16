/**
 * Identity Document (Bulgaria)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/bg.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Име'),
        lastName: lastName('Last name / Фамилия'),
        personalId: personalId('Personal ID number / EGN'),
        documentType: text('Document type / Вид документ'),
        documentNumber: text('Document number / Номер на документа'),
        issueDate: date('Issue date / Дата на издаване'),
        expirationDate: date('Expiration date / Валиден до'),
        issuingAuthority: text('Issuing authority / Издаден от'),
        placeOfBirth: text('Place of birth / Място на раждане'),
        dateOfBirth: date('Date of birth / Дата на раждане'),
        address: text('Residential address / Адрес'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
