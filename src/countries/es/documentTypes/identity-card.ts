/**
 * Identity Document (Spain)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, arrayOfObjects,
    firstName, lastName, personalId
} from '../../../helpers/es.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: arrayOfObjects({
        // English Keys
        firstName: firstName(),
        lastName: lastName(),
        personalId: personalId(),
        documentType: text('Document type (Passport, ID Card, Driver License)'),
        documentNumber: text('Document number'),
        issueDate: date('Issue date'),
        expirationDate: date('Expiration date'),
        issuingAuthority: text('Issuing authority'),
        placeOfBirth: text('Place of birth'),
        dateOfBirth: date('Date of birth'),
        address: text('Residential address'),

        // Original Language Mapping (Aliases)
        nombre: firstName('Nombre'),
        apellidos: lastName('Apellidos'),
        dni: personalId('DNI / NIE'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
