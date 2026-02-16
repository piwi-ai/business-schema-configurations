/**
 * Identity Document (Luxembourg)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/lu.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Prénom'),
        lastName: lastName('Last name / Nom'),
        personalId: personalId('Personal ID number / Matricule (CCSS)'),
        documentType: text('Document type / Type de document'),
        documentNumber: text('Document number / Numéro du document'),
        issueDate: date('Issue date / Date de délivrance'),
        expirationDate: date('Expiration date / Date d\'expiration'),
        issuingAuthority: text('Issuing authority / Autorité de délivrance'),
        placeOfBirth: text('Place of birth / Lieu de naissance'),
        dateOfBirth: date('Date of birth / Date de naissance'),
        address: text('Residential address / Adresse'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
