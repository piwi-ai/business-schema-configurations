/**
 * Identity Document (Spain)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/es.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Nombre'),
        lastName: lastName('Last name / Apellidos'),
        personalId: personalId('Personal ID number / DNI / NIE'),
        documentType: text('Document type / Tipo de documento'),
        documentNumber: text('Document number / Número de documento'),
        issueDate: date('Issue date / Fecha de expedición'),
        expirationDate: date('Expiration date / Fecha de caducidad'),
        issuingAuthority: text('Issuing authority / Autoridad expedidora'),
        placeOfBirth: text('Place of birth / Lugar de nacimiento'),
        dateOfBirth: date('Date of birth / Fecha de nacimiento'),
        address: text('Residential address / Dirección'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
