/**
 * Identity Document (Greece)
 */
import type { DocumentTypeDef } from '../../../types.js';
import {
    text, date, objectSchema,
    firstName, lastName, personalId
} from '../../../helpers/gr.js';

export const identityCard: DocumentTypeDef = {
    id: 'doc-identity-card',
    name: 'Identity Document',
    description: 'Identity document (ID Card, Passport, Driver License)',
    jsonSchema: objectSchema({
        firstName: firstName('First name / Όνομα'),
        lastName: lastName('Last name / Επώνυμο'),
        personalId: personalId('Personal ID number / AMKA'),
        documentType: text('Document type / Τύπος εγγράφου'),
        documentNumber: text('Document number / Αριθμός εγγράφου'),
        issueDate: date('Issue date / Ημερομηνία έκδοσης'),
        expirationDate: date('Expiration date / Ημερομηνία λήξης'),
        issuingAuthority: text('Issuing authority / Εκδούσα αρχή'),
        placeOfBirth: text('Place of birth / Τόπος γέννησης'),
        dateOfBirth: date('Date of birth / Ημερομηνία γέννησης'),
        address: text('Residential address / Διεύθυνση'),
    }, ['firstName', 'lastName', 'personalId', 'documentType', 'documentNumber', 'issueDate', 'expirationDate']),
};
