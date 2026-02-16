/**
 * Identity Document (Portugal)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/pt.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Nome'),
        lastName: lastName('Last name / Apelido'),
        personalId: personalId('Personal ID number / NIF'),
        documentType: text('Document type / Tipo de documento'),
        documentNumber: text('Document number / Número do documento'),
        issueDate: date('Issue date / Data de emissão'),
        expirationDate: date('Expiration date / Data de validade'),
        issuingAuthority: text('Issuing authority / Entidade emissora'),
        placeOfBirth: text('Place of birth / Local de nascimento'),
        dateOfBirth: date('Date of birth / Data de nascimento'),
        address: text('Residential address / Morada'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
